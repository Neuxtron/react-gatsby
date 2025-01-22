import React, { useState } from 'react'
import SectionTitle from '../shared/section_title'
import { supportForm, support, supportInput, supportListView } from "./styles.module.scss"
import FlatButton from '../shared/flat_button'

export default function Support() {
  return (
    <div id='support' className={support}>
      <SectionTitle title='Get in touch'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </SectionTitle>

      <div className={supportForm}>
        <div>
          <h1>Our <strong>support team</strong> is here to help you.</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ab aliquam iusto autem nesciunt. Aspernatur quas cum dicta id laboriosam. Officiis illum cumque omnis esse, corporis eaque doloribus.</p>
        </div>
        <div>
          <SupportInput label='Name' />
          <SupportInput label='Email' />
          <SupportInput label='Message' multiline />
          <FlatButton textColor='black'>SEND MESSAGE</FlatButton>
        </div>
      </div>

      <div className={supportListView}>
        <SupportCard
          image='support1.png'
          title='Help & Support'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima qui voluptas id? Quisquam fugiat soluta quas, nobis perferendis veniam? Tenetur molestiae sapiente distinctio vel?'
          buttonText='FORUM SUPPORT'
        />
        <SupportCard
          image='support2.png'
          title='Sales'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore dicta earum placeat delectus totam doloremque doloribus repellat!'
          buttonText='GET IN TOUCH'
        />
      </div>
    </div>
  )
}

interface SupportInputProps {
  type?: React.HTMLInputTypeAttribute
  label: string
  multiline?: boolean
}
function SupportInput({ type = "text", label, multiline = false }: SupportInputProps) {
  const [isFocused, setFocused] = useState(false)

  const handleFocus = () => {
    setFocused(true)
  }
  const handleUnfocus = () => {
    setFocused(false)
  }
  
  return (
    <div className={supportInput}>
      {multiline ? (
        <textarea
          placeholder={isFocused ? "" : label}
          onFocus={handleFocus}
          onBlur={handleUnfocus}
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={isFocused ? "" : label}
          onFocus={handleFocus}
          onBlur={handleUnfocus}
        />
      )}
      <div style={{ width: isFocused ? "100%" : "0" }}>
        <p style={{ opacity: isFocused ? 1 : 0 }}>{label}</p>
      </div>
    </div>
  )
}

interface SupportCardProps {
  image: string
  title: string
  description: string
  buttonText: string
}
function SupportCard({ image, title, description, buttonText }: SupportCardProps) {
  return (
    <div>
      <img src={`/images/${image}`} alt={title} />
      <h1>{title}</h1>
      <hr />
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  )
}