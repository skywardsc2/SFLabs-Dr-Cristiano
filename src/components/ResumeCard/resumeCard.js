import React from 'react'

import '@styles/global.scss'
import * as resumeStyles from './resumeCard.module.scss'
import IconAcademic from '@images/svg/iconAcademic.inline.svg'
import IconCertificate from '@images/svg/iconCertificate.inline.svg'
import IconTeacher from '@images/svg/iconTeacher.inline.svg'

const iconType = {
    'academic': IconAcademic,
    'certificate': IconCertificate,
    'teacher': IconTeacher
}

const ResumeCard = (props) => {
    const Icon = iconType[props.icon]
    return (
        <div>
            <article className={resumeStyles.container}>
                <Icon className={resumeStyles.icon} alt="Ícone"/>
                {/* <IconAcademic/> */}
                <p>{props.children}</p>
            </article>
        </div>
    )
}

export default ResumeCard
