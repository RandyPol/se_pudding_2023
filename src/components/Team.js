import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { teamMembers } from '../constants'

const Team = () => {
  return (
    <div className="team">
      {teamMembers.map((member, index) => (
        <div className="team__card" key={index}>
          <img src={member.image} alt={member.name} className="team__image" />
          <h3 className="team__name">{member.name}</h3>
          <p className="team__role">{member.role}</p>
          <div className="team__social">
            <a
              href={member.linkedin}
              className="team__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="team__icon-linkedin" />
              <span className="team__icon-label">LinkedIn</span>
            </a>
            <a
              href={member.github}
              className="team__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="team__icon-github" />
              <span className="team__icon-label">GitHub</span>
            </a>
          </div>
          <p className="team__info">
            <span className="team__info-label">Favorite Food:</span>{' '}
            {member.favoriteFood}
          </p>
          <p className="team__info">
            <span className="team__info-label">Hobbies Beside Coding:</span>{' '}
            {member.hobbies}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Team
