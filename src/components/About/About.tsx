import './About.css'

function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about__grid">
        <div className="about__media">
          <img
            className="about__photo"
            src="/images/sobre-equipe.jpg"
            alt="Equipe da Color Dreams Festas Criativas"
          />
        </div>

        <div className="about__content">
          <span className="eyebrow">Sobre a Color Dreams</span>
          <h2>Celebrar é criar memórias</h2>
          <p>
            A Color Dreams Festas Criativas trabalha com decoração e preparação de eventos,
            transformando cada celebração em um momento especial e personalizado. Do primeiro
            contato à execução no dia da festa, cuidamos de cada detalhe com atenção, organização
            e criatividade — para que você viva o seu momento sem se preocupar com nada além de
            aproveitar.
          </p>
          <p>
            Trabalhamos com festas de aniversário, chá revelação e aniversário de casamento,
            sempre construindo uma decoração pensada para a história de quem estamos celebrando.
          </p>

          <ul className="about__points">
            <li>Atendimento próximo e personalizado</li>
            <li>Planejamento cuidadoso de cada evento</li>
            <li>Decoração criativa, com identidade própria</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
