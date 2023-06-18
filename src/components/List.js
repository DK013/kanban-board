import React from 'react'
import Card from './Card'
import '../assets/css/list.css'

import { AddSquare } from 'iconsax-react'
import { useSelector } from 'react-redux';
import { Droppable } from '@hello-pangea/dnd';

const List = (props) => {
  const listItems = useSelector(store => store.listSlice[props.listName]);

  return (
    <div className="list rounded-lg w-[95%] sm:w-1/3 h-auto p-[20px] bg-[#F5F5F5]">
      <div className={`list-header pb-[20px] flex justify-between items-center border-b-[3px] border-solid border-${props.color}`}>
        <div className="list-title flex flex-row justify-start items-center">
          <div className={`eclipse rounded-full bg-${props.color} w-[8px] h-[8px]`}></div>
          <h3 className="ml-[8px] mr-[12px] text-[16px] leading-[19px] font-medium">{props.title}</h3>
          <span className="badge bg-[#E0E0E0] rounded-full w-[20px] h-[20px] font-medium text-[12px] text-[#625F6D] flex items-center justify-center">{listItems.length}</span>
        </div>
        <>{props.canCreate && <button>
          <AddSquare size={24} variant='Bulk' color={'#5030E5'} />
        </button>}</>
      </div>
      <Droppable droppableId={`${props.id}`}>
      {(provided) => (
         <div ref={provided.innerRef} {...provided.droppableProps}>
          <>
          {listItems.length && listItems.map((item, index) => <Card key={item.id} id={item.id} index={index} title={item.title} priority={item.priority} content={item.content} team={item.team} comments={item.comments} files={item.files} completed={item.completed}/>)}
          </>
          {provided.placeholder}
        </div>
      )}
      </Droppable>
    </div>
  )
}

export default List
