import emailjs from '@emailjs/browser'
import './style.css'

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// Trage die Werte aus dem EmailJS-Dashboard in eine lokale `.env`-Datei ein:
// VITE_EMAILJS_SERVICE_ID=...
// VITE_EMAILJS_TEMPLATE_ID=...
// VITE_EMAILJS_PUBLIC_KEY=...
if (emailJsPublicKey) {
  emailjs.init({
    publicKey: emailJsPublicKey,
    blockHeadless: true,
    limitRate: {
      id: 'zukunftwollen-contact-form',
      throttle: 10000,
    },
  })
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<a class="skip-link" href="#kontakt">Zum Kontakt springen</a>
<div class="page-shell">
  <header class="topbar">
    <div class="brand">
      <span class="brand-mark" aria-hidden="true"></span>
      <div>
        <p class="eyebrow">zukunftwollen / future wanting</p>
        <p class="brand-copy">Eine kleine Plattform für klare Schritte, gemeinsames Handeln und eine menschlichere Zukunft.</p>
      </div>
    </div>
    <nav class="nav" aria-label="Seitenabschnitte">
      <a href="#intro">Für dich</a>
      <a href="#unterstuetzer">Für Unterstützer:innen</a>
      <a href="#kontakt">Kontakt</a>
    </nav>
  </header>

  <main>
    <section id="intro" class="hero-section section-slab section-slab--hero">
      <div class="hero-copy">
        <p class="section-label">Intro</p>
        <h1 class="pixel-heading collage-block collage-block--black">Deine Zukunft ist gestaltbar.</h1>
        <p class="lead">
          Du fühlst dich manchmal allein, überfordert oder wie im falschen Film? Zukunftwollen zeigt dir
          echte Menschen, echte Orte und echte Möglichkeiten in deiner Nähe – ganz ohne Umwege. Ein Chat,
          ein paar Fragen, und du weißt, wo du andocken kannst.
        </p>
      </div>

      <div class="hero-art" aria-hidden="true">
        <div class="pixel-orb pixel-orb--large"></div>
        <div class="pixel-orb pixel-orb--small"></div>
        <div class="hero-panel">
          <p>collective energy</p>
          <span>local action</span>
          <span>shared future</span>
        </div>
      </div>
    </section>

    <section id="angebot" class="section-slab section-slab--accent content-section">
      <p class="section-label">Angebot</p>
      <h2>Frag einfach.</h2>
      <p class="lead">
        Unser Chatbot hört zu und findet, was zu dir passt: Gruppen, Vereine, Beratungsstellen, Events
        oder einfach gute Nachrichten, wenn der Kopf mal News-Pause braucht. Du musst nicht wissen,
        wonach du suchst – wir helfen dir, es herauszufinden.
      </p>
    </section>

    <section id="mitmachen" class="section-slab section-slab--dark manifesto">
      <div>
        <p class="section-label">Mitmachen</p>
        <h2 class="pixel-heading collage-block collage-block--black">Wir suchen dich!</h2>
      </div>
      <div class="manifesto-copy">
        <p>
          Wir bauen diese App gerade – lokal in Freiburg, bald überall. Wenn du Lust hast, Ideen
          einzubringen, mitzudenken oder einfach ehrlich zu sagen, was fehlt: Deine Perspektive zählt.
          Diese Welt ist gestaltbar – und du bist eingeladen mitzumachen.
        </p>
      </div>
    </section>

    <section id="neugierig" class="section-slab section-slab--pink cta-teaser">
      <p class="section-label">Kontakt</p>
      <h2 class="pixel-heading glitch-heading">Du bist neugierig?</h2>
      <p class="lead">
        Melde dich bei Cindy:
        <a class="contact-link" href="mailto:cindy@zukunftwollen.org">cindy@zukunftwollen.org</a>
      </p>
    </section>

    <section id="unterstuetzer" class="section-slab section-slab--purple section-divider">
      <h2 class="pixel-heading collage-block collage-block--black section-divider-label">
        <span aria-hidden="true">📋</span> Für Unterstützer:innen
      </h2>
    </section>

    <section id="support-intro" class="section-slab section-slab--primary content-section">
      <p class="section-label">Intro</p>
      <p class="lead">
        Zukunftwollen ist eine KI-gestützte Plattform, die junge Menschen (13–28) mit passgenauen
        lokalen Angeboten für mentale Gesundheit und soziale Teilhabe verbindet – niederschwellig,
        wirkungsorientiert und skalierbar.
      </p>
    </section>

    <section id="support-wirkung" class="section-slab section-slab--neutral content-section">
      <p class="section-label">Angebot / Wirkung</p>
      <p class="lead">
        Angesichts steigender psychischer Belastung und wachsender sozialer Isolation setzt
        Zukunftwollen auf eine LLM-gestützte Bedarfsanalyse, die Nutzer:innen mit Vereinen,
        Beratungsstellen, Angeboten und positiv kuratierten Inhalten vernetzt. Ziel ist die
        Prävention von Isolation und Extremismus sowie die Stärkung demokratischer Teilhabe.
      </p>
    </section>

    <section id="support-pilot" class="section-slab section-slab--primary content-section">
      <p class="section-label">Mitmachen / Pilotprojekt</p>
      <p class="lead">
        Im Pilotjahr 2026 soll die App in Freiburg im Breisgau und Umgebung entstehen- gemeinsam mit
        jungen Menschen und lokalen Trägern – Das Projekt ist langfristig bundesweit übertragbar
        konzipiert.
      </p>
    </section>

    <section id="kontakt" class="section-slab section-slab--pink contact-section">
      <div class="contact-intro">
        <p class="section-label">Kontakt</p>
        <h2>Schreib uns direkt.</h2>
        <p>
          Das Formular sendet direkt über EmailJS. Zum Schutz gegen Spam sind eine
          minimale Wartezeit, ein Honeypot und eine Frontend-Bremse aktiv.
        </p>
        <p class="contact-note">English: send a message, start a conversation, build something useful.</p>
      </div>

      <form id="contact-form" class="contact-form" novalidate>
        <label>
          <span>Name</span>
          <input name="name" type="text" autocomplete="name" placeholder="Dein Name" required aria-describedby="form-status" />
        </label>

        <label>
          <span>E-Mail</span>
          <input name="email" type="email" autocomplete="email" placeholder="deine@mail.de" required aria-describedby="form-status" />
        </label>

        <label>
          <span>Nachricht</span>
          <textarea name="message" rows="6" placeholder="Worum geht es?" required aria-describedby="form-status"></textarea>
        </label>

        <label class="hp-field" aria-hidden="true">
          <span>Website</span>
          <input name="website" type="text" tabindex="-1" autocomplete="off" />
        </label>

        <input type="hidden" name="startedAt" value="${Date.now()}" />

        <div class="form-footer">
          <button type="submit" class="button button--dark" id="submit-button">
            <span class="button-label">Mail senden</span>
            <span class="button-spinner" aria-hidden="true"></span>
          </button>
          <p class="form-status" id="form-status" aria-live="polite" aria-atomic="true"></p>
        </div>
      </form>

      <div class="contact-strip">
        <span>human first</span>
        <span>pixel second</span>
        <span>static by design</span>
      </div>
    </section>
  </main>
</div>
`

const contactForm = document.querySelector<HTMLFormElement>('#contact-form')
const statusElement = document.querySelector<HTMLElement>('#form-status')
const submitButton = document.querySelector<HTMLButtonElement>('#submit-button')
const buttonLabel = document.querySelector<HTMLElement>('.button-label')

const minimumDelayMs = 3200
const submissionCooldownMs = 10000
const submissionKey = 'zukunftwollen:last-form-submit'

function setStatus(message: string, tone: 'info' | 'error' | 'success' = 'info') {
  if (!statusElement) {
    return
  }

  statusElement.textContent = message
  statusElement.dataset.tone = tone
}

function setLoading(isLoading: boolean) {
  if (submitButton) {
    submitButton.disabled = isLoading
    submitButton.setAttribute('aria-busy', String(isLoading))
  }

  if (buttonLabel) {
    buttonLabel.textContent = isLoading ? 'Sende …' : 'Mail senden'
  }
}

function ensureEmailJsConfiguration() {
  if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
    throw new Error('EmailJS ist nicht konfiguriert.')
  }
}

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault()

  if (!contactForm) {
    return
  }

  const formData = new FormData(contactForm)
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const trapValue = String(formData.get('website') ?? '').trim()
  const startedAt = Number(formData.get('startedAt') ?? '0')
  const elapsed = Date.now() - startedAt
  const lastSubmission = Number(window.localStorage.getItem(submissionKey) ?? '0')
  const cooldownRemaining = Date.now() - lastSubmission < submissionCooldownMs

  if (trapValue) {
    setStatus('Die Nachricht konnte nicht gesendet werden.', 'error')
    return
  }

  if (cooldownRemaining) {
    setStatus('Bitte warte einen Moment, bevor du erneut sendest.', 'error')
    return
  }

  if (elapsed < minimumDelayMs) {
    setStatus('Bitte fülle das Formular noch einmal etwas ruhiger aus.', 'error')
    return
  }

  if (!name || !email || !message) {
    setStatus('Bitte fülle Name, E-Mail und Nachricht aus.', 'error')
    return
  }

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity()
    setStatus('Bitte prüfe deine Eingaben.', 'error')
    return
  }

  window.localStorage.setItem(submissionKey, String(Date.now()))

  const existingUserReplyTo = formData.get('reply_to')
  if (!existingUserReplyTo) {
    const replyToField = contactForm.querySelector<HTMLInputElement>('input[name="reply_to"]')
    if (!replyToField) {
      const hiddenReplyTo = document.createElement('input')
      hiddenReplyTo.type = 'hidden'
      hiddenReplyTo.name = 'reply_to'
      hiddenReplyTo.value = email
      contactForm.append(hiddenReplyTo)
    } else {
      replyToField.value = email
    }
  }

  setLoading(true)
  setStatus('Die Nachricht wird gesendet …', 'info')

  void (async () => {
    try {
      ensureEmailJsConfiguration()

      const response = await emailjs.sendForm(emailJsServiceId, emailJsTemplateId, contactForm)

      if (response.status >= 200 && response.status < 300) {
        contactForm.reset()
        contactForm.querySelector<HTMLInputElement>('input[name="startedAt"]')!.value = String(Date.now())
        setStatus('Danke, die Nachricht wurde gesendet.', 'success')
        return
      }

      throw new Error(response.text || 'Unbekannter EmailJS-Fehler')
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Die Nachricht konnte nicht gesendet werden.'
      setStatus(`Fehler: ${message}`, 'error')
    } finally {
      setLoading(false)
    }
  })()
})
