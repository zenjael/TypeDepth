/**
 * TypeDepth — MBTI Data
 * Single source of truth for all 16 types.
 * Used by type pages, explore grid, and compare panel.
 */

const MBTI_TYPES = {

  INFP: {
    code: 'INFP',
    name: 'The Mediator',
    tagline: 'Quietly idealistic, fiercely authentic',
    description: 'INFPs are driven by deeply held personal values and a rich inner world. They seek meaning in everything and lead with empathy and imagination.',
    functions: [
      { position: 1, role: 'Dominant',        code: 'Fi', name: 'Introverted Feeling',   description: 'Deep personal values that filter every decision. INFPs know what matters to them with quiet certainty.' },
      { position: 2, role: 'Auxiliary',        code: 'Ne', name: 'Extraverted Intuition', description: 'A mind that leaps between ideas, spots hidden connections, and imagines what could be.' },
      { position: 3, role: 'Tertiary',         code: 'Si', name: 'Introverted Sensing',   description: 'Comfort in the familiar — personal memories, routines, and deeply felt past experiences.' },
      { position: 4, role: 'Inferior',         code: 'Te', name: 'Extraverted Thinking',  description: 'The least developed function — logical organisation and external efficiency feel draining.' },
      { position: 5, role: 'Opposing',         code: 'Fe', name: 'Extraverted Feeling',   description: 'Can become defensive about their values when challenged by others\' emotional expectations.' },
      { position: 6, role: 'Critical Parent',  code: 'Ni', name: 'Introverted Intuition', description: 'A harsh inner critic about their future vision — doubting whether their dreams are realistic.' },
      { position: 7, role: 'Trickster',        code: 'Se', name: 'Extraverted Sensing',   description: 'Struggles to stay present — the physical, immediate moment can feel overwhelming.' },
      { position: 8, role: 'Demon',            code: 'Ti', name: 'Introverted Thinking',  description: 'Rigid internal logic that, when activated, becomes cold and ruthlessly self-critical.' }
    ],
    tendencies: [
      'Deeply loyal to personal values — will not compromise on what they believe is right',
      'Rich inner world that others rarely see in full',
      'Naturally empathetic — they feel the emotional weight of others',
      'Drawn to creative expression: writing, art, music, storytelling',
      'Idealistic — always reaching toward a better version of things'
    ],
    stress: {
      summary: 'Under stress, the inferior Te "grips" the INFP. They become uncharacteristically rigid, critical, and controlling.',
      signs: [
        'Sudden bluntness or harsh judgements of others',
        'Obsessing over facts, data, or being "right"',
        'Trying to over-organise or control outcomes',
        'Lashing out with cold logic instead of feelings',
        'Deep self-criticism and inner shame spirals'
      ]
    },
    loops: [
      {
        name: 'The Rumination Loop',
        functions: 'Fi + Si (bypassing Ne)',
        description: 'Instead of exploring new possibilities, the INFP turns inward and replays past experiences through the lens of their values. They get stuck in what should have been.',
        feels_like: 'I keep replaying what I said. I can\'t stop thinking about whether I did the right thing. Everything feels heavy and I don\'t want to try anything new.'
      },
      {
        name: 'The Spiral',
        functions: 'Fi + Ne (feeding each other)',
        description: 'Values generate worries, Ne generates endless possibilities to worry about, and Fi judges each one against personal values. On repeat.',
        feels_like: 'What if I made the wrong choice? But what about this other path? What does that say about me as a person? What if none of it matters?'
      }
    ],
    needs: [
      'Space to process emotions without pressure or judgement',
      'People who respect and engage with their values',
      'Creative outlets — writing, making, imagining',
      'Gentle nudges toward action (to develop Te)',
      'Permission to not explore every possibility before deciding'
    ],
    growth: 'Growth for INFPs comes from developing their inferior Te — learning that structure and efficiency aren\'t the enemy of authenticity. Small practical commitments build trust in themselves.',
    related: ['INFJ', 'ENFP', 'ISFP']
  },

  INFJ: {
    code: 'INFJ',
    name: 'The Advocate',
    tagline: 'Visionary, private, driven by meaning',
    description: 'INFJs lead with a powerful inner vision and a deep concern for the wellbeing of others. They are rare in their ability to combine idealism with a clear sense of direction.',
    functions: [
      { position: 1, role: 'Dominant',        code: 'Ni', name: 'Introverted Intuition',  description: 'A powerful ability to synthesise patterns into a single unified vision of what is coming.' },
      { position: 2, role: 'Auxiliary',        code: 'Fe', name: 'Extraverted Feeling',    description: 'Deep attunement to the emotional environment — they feel the mood of a room before anyone speaks.' },
      { position: 3, role: 'Tertiary',         code: 'Ti', name: 'Introverted Thinking',   description: 'An internal logical framework used to organise and validate their intuitions.' },
      { position: 4, role: 'Inferior',         code: 'Se', name: 'Extraverted Sensing',    description: 'The least developed function — staying present in the physical moment is genuinely hard.' },
      { position: 5, role: 'Opposing',         code: 'Ne', name: 'Extraverted Intuition',  description: 'Can become scattered or contrarian when their singular vision is challenged with too many alternatives.' },
      { position: 6, role: 'Critical Parent',  code: 'Fi', name: 'Introverted Feeling',    description: 'A harsh inner critic about whether they are living according to their own values, not just others\'.' },
      { position: 7, role: 'Trickster',        code: 'Te', name: 'Extraverted Thinking',   description: 'Efficiency and blunt logic can blindside them — they underestimate how systems and processes affect outcomes.' },
      { position: 8, role: 'Demon',            code: 'Si', name: 'Introverted Sensing',    description: 'When deeply dysregulated, they become hyper-fixated on past details or bodily sensations.' }
    ],
    tendencies: [
      'Strong, clear inner vision — they often "just know" things without being able to explain why',
      'Absorb others\' emotions like a sponge — can feel responsible for how everyone feels',
      'Highly private — the inner world is vast but rarely shared fully',
      'Perfectionistic about their purpose and sense of direction',
      'The "door slam" — when pushed too far, they quietly and permanently close the door'
    ],
    stress: {
      summary: 'Under stress, the inferior Se "grips" the INFJ. They become hyper-focused on the physical world in an uncharacteristic and obsessive way.',
      signs: [
        'Overindulging in sensory pleasures — food, shopping, screens, alcohol',
        'Hyper-aware of every physical discomfort or sensation',
        'Paralysed by the present moment — unable to access their usual Ni vision',
        'Impulsive behaviour out of character',
        'A sudden crash after prolonged over-giving to others'
      ]
    },
    loops: [
      {
        name: 'The Isolation Loop',
        functions: 'Ni + Ti (bypassing Fe)',
        description: 'Instead of connecting with others to reality-check their vision, the INFJ retreats inward and builds elaborate logical frameworks alone. Certainty and disconnection grow simultaneously.',
        feels_like: 'I\'ve figured it all out. I don\'t need to talk to anyone about it. I\'m certain I\'m right — but also completely paralysed and haven\'t left the house in days.'
      }
    ],
    needs: [
      'Meaningful alone time for Ni to synthesise — they must not fill all silences',
      'A trusted one or two people to share their inner vision with',
      'Physical activity and presence to develop Se and get out of their head',
      'Permission to not have everything figured out before sharing',
      'Boundaries — they give too much and need to learn to receive'
    ],
    growth: 'Growth for INFJs comes from developing Se — being present in the body, the moment, the physical world. Practices like exercise, cooking, nature walks are not distractions; they are medicine.',
    related: ['INFP', 'ENFJ', 'INTJ']
  }

  // Additional types to be added in Sprint 5
}

// Export for use in other scripts
if (typeof module !== 'undefined') {
  module.exports = MBTI_TYPES
}
