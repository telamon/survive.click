import { writable, derived } from 'svelte/store'
import { Identity, Poll, VoteMsg } from 'cryptology'
import App from './App.svelte'

// import Feed from 'picofeed'
const initIdentity = () => {
  const stored = localStorage.getItem('identity')
  if (!stored) {
    const id = new Identity()
    window.localStorage.setItem('identity', Identity.encode(id))
    console.info('new identity generated')
    return id
  } else {
    console.info('loading existing identity')
    return Identity.decode(stored)
  }
}
const SIG_PK = Buffer.from('bc84402f1452ebb8c8436b4c0b59e878dfe826b1b493156f2a628954cf539f53', 'hex')
const HARDPOLL= 'PIC0.K0.vIRALxRS67jIQ2tMC1noeN_oJrG0kxVvKmKJVM9Tn1MB0.UfR85P3j6KypjYQm3UV1ChznWx-9pKz8Zng5AwijCB6X9Ggl5FJd0S3ok2zY5WLjFB+_T_jpwNy5U2Omw7QzBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMCkoIody9gJYuEiC_SIPbiC2D+h+jEsBa2zX66kSpea0J75licq4SewWmKjIfSGVsbG8gV29ybGQhIEhvdyBhcmUgeW91IGRvaW5nPw'

const initPoll = () => {
  // Init poll
  if (!window.location.hash.length) {
    window.location.hash = HARDPOLL
  }

  const hcPoll = new Poll(HARDPOLL)
  try {
    const loaded = new Poll(window.location.hash.slice(1))
    if (!SIG_PK.equals(loaded.key)) throw new Error('Not my poll')
    if (loaded.challenge.version < hcPoll.challenge.version) {
      throw new Error('upgrading')
    }
    loaded.challenge // A proper poll should have a challenge.
    // all good, url loaded and verified
    window.location.hash = loaded.pickle()
    console.info('Poll successfully loaded from URL')
    return loaded
  } catch(e) {
    console.warn('Loading default poll', e)
    window.location.hash = hcPoll.pickle()
    return hcPoll
  }
}

// constants
const id = initIdentity()
const poll = initPoll()
const motion = poll.challenge.motion || `This is my pebble`
const ch = poll.challenge
const motd = (new Date(ch.version || 0).getYear() > 70
    ? new Date(ch.version).toDateString() + ': ' + ch.motd
    : `motd#${ch.version}: ${ch.motd}`) || 'motd#0: void says null'

// stores
const shareMsg = writable()
const vote = writable(0)
const pickle = derived(vote, value => {
  if (!value) return poll.pickle()
  poll.packVote(id, VoteMsg.encode({ value }))
  console.info('Packing vote', value)
  const p = poll.pickle()
  window.location.hash = p
  return p
})

const links = derived([pickle, shareMsg], ([pickle, msg]) => {
  msg = encodeURIComponent(msg || motion)
  const uobj = new URL('https://survive.click' || window.location)
  uobj.hash = pickle
  const url = encodeURIComponent(uobj)
  const tags = 'moodpebble'
  return {
    direct: uobj.toString(),
    tw: `https://twitter.com/intent/tweet?text=${msg}&url=${url}&hashtags=${tags}`,
    // TODO: msg, hashtags
    fb: `https://facebook.com/sharer/sharer.php?u=${url}`,
    // TODO: hashtags
    vk: `https://vk.com/share.php?title=${msg}&url=${url}`
  }
})

const app = new App({
  target: document.body,
  props: {
    id,
    motion,
    shareMsg,
    vote,
    pickle,
    motd,
    links
  }
})

export default app
