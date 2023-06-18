import React from "react";
import "../assets/css/page.css";

import PageHeader from "./PageHeader";
import FilterBar from "./FilterBar";
import List from "./List";

import { updateList } from '../store/listSlice';
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext } from "@hello-pangea/dnd";

const Page = () => {
  const dispatch = useDispatch();
  const initialState = useSelector((store) => store.listSlice);
  const allLists = initialState.allLists;
  var timer = null;
  const onScroll = () => {
    if(timer !== null) {
      clearTimeout(timer);        
    }
    document.querySelector('body').classList.add('scrolling');
    timer = setTimeout(function() {
      document.querySelector('body').classList.remove('scrolling');
    }, 1000);
  }

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if(!destination)
      return;

    if(source.droppableId === destination.droppableId) {
      if(source.index === destination.index)
        return;
      
      let destList = allLists.find(o => o.id === parseInt(destination.droppableId)).list;
      let listObject = initialState[destList];
      let newList = [...listObject];
      let card = listObject[source.index];
      newList.splice(source.index, 1);
      newList.splice(destination.index, 0, card);
      dispatch(updateList({task: 'single', list: destList, data: newList}));
    } else {
      let srcList = allLists.find(o => o.id === parseInt(source.droppableId)).list;
      let srcObject =initialState[srcList];
      let destList = allLists.find(o => o.id === parseInt(destination.droppableId)).list;
      let destObject = initialState[destList];
      let newSrcList = [...srcObject];
      let newDestList = [...destObject];
      let card = srcObject[source.index];
      newSrcList.splice(source.index, 1);
      newDestList.splice(destination.index, 0, card);
      dispatch(updateList({task: 'multiple', src: {list: srcList, data: newSrcList}, dest: {list: destList, data: newDestList}}));
    }
  }
    

  return (
    <div className="container w-11/12 h-[85vh] my-5 2xl:my-10 mx-auto overflow-auto" onScroll={onScroll}>
      <PageHeader />
      <FilterBar />
      <div className="w-auto sm:w-full h-auto flex flex-row justify-between my-5 2xl:my-10">
        <DragDropContext onDragEnd={onDragEnd}>
          <>
            {allLists.length &&
              allLists.map((list, index) => (
                <List
                  key={list.id}
                  id={list.id}
                  index={index}
                  title={list.title}
                  color={list.color}
                  canCreate={list.canCreate}
                  listName={list.list}
                />
              ))}
          </>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Page;
