import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

const Container = styled.div`
  height: 87vh;
  width: 65vw;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 1rem;
  box-shadow: 3px 3px 9px 1px #999;
`
const TitleContainer = styled.h1`
  height: 7vh;
  width: 60vw;  
  padding-top: 4%;
  padding-left: 6%;
  padding-right: 6%;
`
const ContentContainer = styled.div`
  height: 17vh;
  width: 60vw;
  padding-top: 4%;
  padding-left: 6%;
  padding-right: 6%;
  font-size: 2rem;
`
const CommentContainer = styled.div`
  height: 47vh;
  width: 60vw;
  padding-left: 6%;
  padding-right: 6%;
`
const CommentnameContainer = styled.div`
  height: 2vh;
  width: 50vw;
  display: flex;
  justify-content: left;
  font-weight: 900;
`
const InfoContainer = styled.div`
  width: 60vw;
  height: 3vh;
  display: flex;
  justify-content: right;
  border-bottom: solid 3px;
  border-color: rgba(0, 0, 0, 0.3);
`
const CommentbodyContainer = styled.div`
  height: 3vh;
  width: 60vw;
  display: flex;
  justify-content: left;
  opacity: 45%;
  border-bottom: solid 3px;
  padding-bottom: 2%;
  border-color: gray;
`
const Content = () => {
  let params = useParams()
  const [content, setContent] = useState([])
  const [comment, setComment] = useState([])
  const requestdata = async () => {
    try {
      const listdata = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      return listdata
    }
    catch (err) { }
  }
  const getdata = requestdata()
  const requestcomment = async () => {
    try {
      const commentdata = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
      return commentdata
    }
    catch (err) { }
  }
  const getcomment = requestcomment()
  useEffect(() => {
    getdata.then((data) => {
      setContent(data.data)
    })
    getcomment.then((el) => {
      setComment(el.data)
    })
  }, []);



  return (
    <>
      <Container>
        <TitleContainer>{content.title}</TitleContainer>
        <InfoContainer>작성자 {content.userId}</InfoContainer>
        <ContentContainer>{content.body}</ContentContainer>
        <InfoContainer>댓글 5개</InfoContainer>
        <CommentContainer>
          <br/>
          {comment.slice(0).map((el) => {
            return (
              <div key={el.id}>
                <CommentnameContainer>{el.name}</CommentnameContainer>
                <CommentbodyContainer>{el.body}</CommentbodyContainer>
                <br></br>
              </div>
            )
          })}
        </CommentContainer>
      </Container>

    </>
  )
}

export default Content