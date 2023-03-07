import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const FormContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #131213;
  padding-top: 40px;
`

export const FormHeading = styled.h1`
  color: #f3aa4e;
  margin-top: 30px;
  width: 100%;
  text-align: center;
`
export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`
export const TextInputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
export const TextLabel = styled.label`
  color: #f8f8f8;
  font-weight: bold;
  margin: 10px 0px;
`
export const TextInput = styled.input`
  color: #323f4b;
  padding: 8px 2px;
  outline: none;
`
export const SelectData = styled.select`
  color: #323f4b;
  padding: 8px 2px;
  outline: none;
`
export const TextOption = styled.option`
  color: #323f4b;
`
export const TasksContainer = styled.div`
  width: 70%;
  background-color: #000000;
  overflow: auto;
`
export const TagsContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
`
export const EachTag = styled.li`
  background-color: transparent;
  margin-right: 15px;
`
export const Tag = styled.button`
  padding: 5px 10px;
  background-color: ${props => (props.active ? '#f3aa4e' : 'transparent')};
  color: #f1f5f9;
  border: 1px solid #f3aa4e;
  border-radius: 20px;
  cursor: pointer;
`
export const TasksBox = styled.ul`
  list-style-type: none;
  margin: 6%;
  padding: 0px;
`
export const EachTask = styled.li`
  background-color: #1a171d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-bottom: 10px;
`
export const TaskPara = styled.p`
  color: #f1f5f9;
  font-weight: bold;
`
export const TaskBtnPara = styled.p`
  background-color: #f3aa4e;
  padding: 5px 10px;
  border-radius: 20px;
  color: #323f4b;
  font-weight: bold;
`
export const TagsHeading = styled.h1`
  color: #f1f5f9;
  margin-left: 5%;
  margin-top: 8%;
`
export const TasksHeading = styled.h1`
  color: #f1f5f9;
  margin-left: 5%;
`
export const AddTaskBtn = styled.button`
  color: #f1f5f9;
  background-color: #f3aa4e;
  border: 0px;
  margin: 40px auto;
  width: 50%;
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
`
export const NoTasksContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NoTasks = styled.p`
  color: #f1f5f9;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10%;
`
