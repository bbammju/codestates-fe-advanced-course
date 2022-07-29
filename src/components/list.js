import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const ListContainer = styled.div`
  width: 70vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`
const ContentContainer = styled.div`
  width: 70vw;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px;
  border-color: rgba(0, 0, 0, 0.2);
`
const Blank = styled.div`
  width: 80vw;
  display: flex;
  height: 5vh;
  border-bottom: solid 5px;
  border-color: rgba(0, 0, 0, 0.2);
`

const List = () => {
  const [content, setContent] = useState([])
  const navigate = useNavigate()
  const requestdata = async () => {
    try{
    const listdata = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return listdata
    }
    catch (err) {}
  }
  const getdata = requestdata()
  
  useEffect(() => {
    getdata.then((data) => {
      setContent(data.data)
    })
  }, []);

  const navigateHandler = (e) => {
    const id = e
    navigate(`/posts/${id}`)
  }
  return(
    <>
    <ListContainer>
      <Blank/>
      
      {content.slice(0).map((el) => {
        return(
          <ContentContainer key={el.id} >
            <span onClick={() => {navigateHandler(el.id)}}>{el.title}</span>
            <span>작성자 {el.userId}</span>
          </ContentContainer>
        )
      })}
      
    </ListContainer>
    </>
  )
}

export default List

