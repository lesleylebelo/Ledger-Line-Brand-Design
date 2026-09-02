# Ledgerline — Case Study

**A self-initiated brand, digital design, and web development project.**

Ledgerline is a fictional B2B ERP company created as a self-directed case study exploring how a complete digital product brand can be taken from initial strategy and positioning through brand identity, campaign design, UX, responsive interface design, and coded web development.

The project was intentionally structured as an end-to-end exercise rather than a collection of disconnected design pieces. Each stage informed the next, creating a consistent visual and strategic system across brand, marketing, print, UX, UI, and web.

---

## Problem

Enterprise and business software can often fall into one of two visual extremes: overly corporate and impersonal, or heavily influenced by consumer-startup aesthetics that don't necessarily communicate trust and operational reliability.

The self-set challenge was to create a B2B ERP brand that felt **credible and capable without becoming cold**, while remaining modern enough to appeal to businesses operating in a changing digital environment.

The brief was to invent a plausible ERP company serving wholesale and distribution businesses, then develop a complete brand and digital ecosystem around it.

The project needed to answer a simple question:

> **How can a business software brand communicate reliability and operational competence while still feeling clear, modern, and human?**

The resulting concept became **Ledgerline**.

---

## Research

Because Ledgerline is a fictional product with no existing customers or user base, the research focused on **category, competitor, and visual-language analysis** rather than primary user interviews.

I examined how ERP, enterprise software, and trade-focused technology brands communicate their products, particularly their approaches to:

* Brand positioning
* Visual identity
* Colour and typography
* Product marketing
* Information hierarchy
* Calls to action
* Trust and credibility
* Responsive website design

A recurring pattern emerged. Many established ERP brands lean heavily into traditional enterprise aesthetics, while newer software companies often adopt highly expressive startup-oriented visual systems.

This created an opportunity for Ledgerline to occupy a middle ground: **calm, competent, modern, and human**.

I also created two lightweight personas representing different perspectives within the buying process:

* **Economic buyer** — focused on efficiency, reliability, cost, and business visibility.
* **Daily user** — focused on usability, speed, clarity, and reducing operational friction.

These personas helped keep the design grounded in the needs of people who would interact with the product differently.

Research and persona documentation can be found in:

`/research/personas-journey.html`

---

## Strategy

### Positioning

> **For operations leaders in wholesale and distribution who are tired of clunky, outdated software, Ledgerline is the ERP platform that feels as fast and clear as the business it runs — unlike legacy systems that slow teams down.**

The positioning became the foundation for the visual and verbal direction of the project.

Four personality characteristics were established:

**Reliable · Direct · Modern · Human**

These characteristics were used as decision-making criteria throughout the project, from the logo and colour system to campaign messaging, interface hierarchy, imagery, and interaction states.

---

## Design

### Logo

The logo began with a simple conceptual idea: **a ledger line that resolves into a confirmed result**.

Early explorations focused on combining accounting references with a subtle sense of progress and growth. The final mark was simplified into three horizontal strokes of increasing length, with the final stroke breaking upward into a tick.

The resulting symbol communicates two ideas simultaneously:

* A reference to financial records and structured information
* A subtle signal of progress, completion, and growth

The mark was designed to remain recognisable at small sizes, including approximately 20px for digital navigation.

### Wireframe → UI

The homepage began as a grey-box wireframe before moving into high-fidelity implementation.

Rather than creating a separate static high-fidelity mockup for every screen, the interface was developed directly in the browser. This allowed layout, responsiveness, interaction, and visual design to be evaluated together during implementation.

The wireframes and information architecture are available in:

`/ux/wireframes`

### Usability refinement

During implementation, a small but important usability issue emerged.

At approximately 20–22px, the three horizontal strokes of the standalone logo mark could be interpreted as a hamburger menu icon, particularly when positioned next to the actual mobile navigation control.

To remove the ambiguity, the mobile navigation uses a **badge variant** of the logo — the mark contained within a navy rounded square.

This was a useful reminder that a mark can work perfectly well in isolation but behave differently when placed within a specific interface context.

---

## Brand System

The Ledgerline identity was developed as a reusable system rather than a single logo.

The system includes:

* Primary and secondary logo variations
* Iconography
* Colour palette
* Typography
* Spacing principles
* Layout guidance
* Buttons and interface elements
* Brand applications
* Digital usage guidelines

The complete brand guidelines are available in:

`/brand/brand-guidelines.html`

---

## Campaign

The visual identity was extended into a campaign built around the central line:

> **“Every line adds up.”**

The campaign explores the relationship between individual operational decisions and the larger picture they create for a business.

Deliverables include:

* Creative brief
* Social media graphics
* Digital advertisements
* Email header
* Website banner
* Promotional graphic
* Presentation cover
* Print collateral
* A4 brochure

The campaign work is organised under:

`/creative-brief`

`/campaign`

`/print`

The brochure was also exported as a print-ready PDF to demonstrate consideration for physical production requirements.

---

## UX & UI

The digital experience was designed around clarity and straightforward navigation.

The core information architecture includes:

**Home → Solutions → Contact / Demo**

The Solutions experience includes working industry tabs that allow visitors to explore relevant use cases without leaving the page.

The interface was designed mobile-first, with layouts adapting across desktop, tablet, and mobile breakpoints.

The responsive homepage was tested across multiple viewport sizes:

* Desktop
* Tablet
* Mobile

Screenshots are available in:

`/ui-design/exports`

---

## Web Development

The brand and interface were translated into a working responsive website consisting of three pages:

1. **Homepage**
2. **Solutions**
3. **Contact / Demo**

The pages share a common stylesheet and JavaScript file, with the implementation structured around reusable design patterns and shared visual tokens.

The website was built mobile-first using:

* HTML
* CSS
* JavaScript
* CSS custom properties
* Responsive layouts
* Client-side form validation

The brand's colour and spacing tokens were carried directly into the CSS rather than being manually reinterpreted during development. This helped maintain consistency between the documented design system and the final implementation.

---

## Interaction & Form Validation

The contact form is functional on the client side.

It includes:

* Required-field validation
* Email-pattern validation
* Visible error states
* Success states
* Clear user feedback

Because Ledgerline is a fictional company, the form does **not** pretend to submit to a real CRM or backend service. The success state explicitly communicates that the submission is simulated.

This keeps the prototype honest while still demonstrating the intended interaction and validation behaviour.

---

## Developer Handoff

A dedicated developer handoff document was created to explain how the design system should be maintained and extended.

It documents:

* Colour tokens
* Spacing scale
* Typography
* Button states
* Form-field states
* Responsive breakpoints
* Component behaviour
* Implementation considerations
* Potential React component structure

The documentation is available in:

`/documentation/developer-handoff.html`

---

## Outcome

Ledgerline is a fictional project, so there are no real business metrics to report.

There is no real:

* Website traffic
* Conversion rate
* Customer feedback
* Revenue impact
* Product adoption

No fabricated performance claims have been used.

Instead, the outcome of the project is the **complete system itself** — a fictional brand taken from strategic concept through to a working responsive digital experience.

The project demonstrates the ability to:

* Develop a visual identity from an initial concept
* Translate positioning into visual and verbal design decisions
* Create a consistent brand system
* Develop campaign and marketing collateral
* Apply the brand across digital and print formats
* Create UX flows, personas, and wireframes
* Design responsive interfaces
* Translate design decisions into HTML/CSS/JavaScript
* Implement client-side interaction and validation
* Identify and resolve usability issues during implementation
* Document design and development decisions for future handoff

---

## Limitations

As a self-initiated fictional project, Ledgerline does not attempt to replicate every condition of a commercial client engagement.

It does not demonstrate:

* Working with real stakeholders
* Managing client feedback cycles
* Resolving conflicting stakeholder requirements
* Working within an established brand system
* Designing within an existing CMS
* Working with a production development pipeline
* Responding to real customer research
* Delivering against live commercial deadlines
* Measuring real business outcomes

These limitations are intentional and are part of the context of the case study.

---

## Project Structure

The repository is organised around the different stages of the project:

```text
/brand
    /logo
    brand-guidelines.html

/research
    personas-journey.html

/ux
    /wireframes

/ui-design
    /exports

/creative-brief

/campaign

/print

/web-development
    index.html
    solutions.html
    contact.html
    styles.css
    script.js

/documentation
    developer-handoff.html
```

The structure reflects the progression from **strategy → identity → UX → UI → campaign → development → documentation**.

---

## Skills Demonstrated

### Brand & Visual Design

* Brand identity development
* Logo and icon design
* Typography
* Colour systems
* Layout and hierarchy
* Brand guidelines
* Visual consistency

### Campaign & Marketing Design

* Creative direction
* Campaign concept development
* Social media assets
* Digital advertising
* Email graphics
* Promotional materials
* Presentation design
* Print collateral

### UX & UI

* Persona development
* User journeys
* Information architecture
* Wireframing
* Responsive interface design
* Interaction states
* Usability refinement
* Mobile-first thinking

### Web Development

* Semantic HTML
* CSS
* Responsive design
* CSS custom properties
* JavaScript
* Client-side form validation
* Interactive UI states
* Cross-device layout implementation

### Documentation

* Brand guidelines
* Design documentation
* Developer handoff
* Component documentation
* Design-token documentation

---

## Reflection

The most valuable part of the project was not any individual deliverable, but the process of maintaining a consistent thread between each stage.

A positioning decision influenced the brand personality. The brand personality influenced the visual system. The visual system informed the campaign and interface. The interface then had to survive the transition from design concept to actual responsive code.

That process also exposed problems that would not necessarily be visible in a static design environment — such as the mobile logo/navigation ambiguity.

Ledgerline therefore became less about creating a collection of polished assets and more about demonstrating how a **coherent design system can move from strategy to execution across multiple mediums**.
