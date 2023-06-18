import React from 'react'
import '../assets/css/card.css'

import { Message, Folder2 } from 'iconsax-react'
import { Draggable } from '@hello-pangea/dnd'

const Card = (props) => {

  const content = typeof props.content === 'string' ? (props.content.split(':')[0] && props.content.split(':')[0] === 'img' ? 
  <img src={props.content.split(':')[1]} alt="" className='w-full'/> : <span className="text-[12px] leading-[15px] text-mercor-gray">{props.content}</span>) : props.content.map((item, index) => {
    return item.split(':')[0] && item.split(':')[0] === 'img' ? <img key={index} src={item.split(':')[1]} alt="" className="w-[48%]"/> : <span key={index} className="text-[12px] leading-[15px] text-mercor-gray">{item}</span>
  })

  return (
    <Draggable draggableId={`card-${props.id}`} index={props.index}>
      {(provided) => (
        <div className="card w-full h-auto mt-[20px] p-[20px] rounded-lg bg-white" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div className="card-header flex flex-row justify-between items-center mb-1">
            <div className="card-header-left flex-1">
              <span className={`priority px-1.5 py-1 text-[12px] leading-[15px] font-medium text-${(props.priority === 1 ? 'mercor-red-lite' : 'mercor-yellow')} bg-${(props.priority === 1 ? 'mercor-red-lite' : 'mercor-yellow')}/[0.2] rounded`}>{(props.priority === 1 ? 'High' : 'Low')}</span>
            </div>
            <div className="card-header-right flex-none w-20px">
              <button className="w-full text-[16px] leading-[19px] font-extrabold text-right">...</button>
            </div>
          </div>
          <div className="card-body my-1.5">
            <h1 className="card-title text-[18px] leading-[21px] font-semibold mb-1.5">{props.title}</h1>
            <div className={`card-content ${(typeof props.content !== 'string' && 'flex flex-row justify-between')}`}>
              {content}
            </div>
          </div>
          <div className="card-footer flex flex-row justify-between items-center mt-5">
            <div className="flex-none w-[80px] flex flex-row justify-start items-center">
              <>
              {props.team.length && props.team.map((member, index) => <img key={index} src={member} alt="" className={'w-[24px] h-[24px] ' + (index !== 0 ? '-ml-[4px]' : '')} style={{zIndex: props.team.length - index}} />)}
              </>
            </div>
            <div className="flex-1 flex flex-row justify-end items-center">
              <div className="flex flex-row justify-end items-center mr-2">
                <Message size={16} variant="Outline" color={'#787486'}/>
                <span className="text-[12px] leading-[14px] font-medium ml-1 text-mercor-gray">{props.comments} </span>
                <span className="hidden sm:block text-[12px] leading-[14px] font-medium ml-1 text-mercor-gray">Comments</span>
              </div>
              <div className="flex flex-row justify-end items-center ml-2">
                <Folder2 size={16} variant="Outline" color={'#787486'}/>
                <span className="text-[12px] leading-[14px] font-medium ml-1 text-mercor-gray">{props.files} </span>
                <span className="hidden sm:block text-[12px] leading-[14px] font-medium ml-1 text-mercor-gray">Files</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default Card
