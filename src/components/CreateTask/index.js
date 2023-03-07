import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import {
  MainContainer,
  FormContainer,
  TasksContainer,
  FormHeading,
  FormBox,
  TextInputBox,
  TextLabel,
  TextInput,
  SelectData,
  TextOption,
  TagsHeading,
  AddTaskBtn,
  TagsContainer,
  EachTag,
  TasksBox,
  EachTask,
  TaskPara,
  TaskBtnPara,
  Tag,
  TasksHeading,
  NoTasksContainer,
  NoTasks,
} from './styledComponents'

class CreateTask extends Component {
  constructor(props) {
    super(props)
    const {tagsList} = this.props
    this.state = {
      taskName: '',
      tagValue: 'HEALTH',
      optionsList: tagsList,
      tasksList: [],
      status: '',
    }
  }

  addTasks = e => {
    e.preventDefault()
    const {taskName, tagValue, optionsList} = this.state
    if (taskName && tagValue) {
      const newValue = optionsList.filter(item => item.optionId === tagValue)
      console.log(newValue)
      const newItem = {
        id: uuidv4(),
        taskName,
        tagValue: newValue[0].displayText,
      }
      this.setState(prevState => ({
        tasksList: [...prevState.tasksList, newItem],
      }))
    }
    this.setState({taskName: '', tagValue: 'HEALTH'})
  }

  updateTaskName = e => {
    this.setState({taskName: e.target.value})
  }

  updateTagValue = e => {
    this.setState({tagValue: e.target.value})
  }

  renderTagsBtn = tag => {
    const {status} = this.state
    return (
      <EachTag key={tag.optionId}>
        <Tag
          type="button"
          onClick={() => this.updateTasksList(tag.displayText)}
          active={status === tag.displayText}
        >
          {tag.displayText}
        </Tag>
      </EachTag>
    )
  }

  updateTasksList = newStatus => {
    const {status} = this.state
    const statusValue = status !== newStatus
    if (statusValue) {
      this.setState({status: newStatus})
    } else {
      this.setState({status: ''})
    }
  }

  renderEachTask = task => (
    <EachTask key={task.id}>
      <TaskPara>{task.taskName}</TaskPara>
      <TaskBtnPara>{task.tagValue}</TaskBtnPara>
    </EachTask>
  )

  renderOptions = item => (
    <TextOption key={item.optionId} value={item.optionId} id="taskName">
      {item.displayText}
    </TextOption>
  )

  render() {
    const {optionsList, taskName, tagValue, tasksList, status} = this.state
    console.log(tagValue, taskName, tasksList, status)
    let updatedTasksList = tasksList

    if (status) {
      updatedTasksList = tasksList.filter(task => task.tagValue === status)
    }

    return (
      <MainContainer>
        <FormContainer>
          <FormHeading>Create a task!</FormHeading>
          <FormBox onSubmit={this.addTasks}>
            <TextInputBox>
              <TextLabel htmlFor="task">Task</TextLabel>
              <TextInput
                type="text"
                value={taskName}
                id="task"
                name="task"
                onChange={this.updateTaskName}
                placeholder="Enter the task here"
              />
            </TextInputBox>
            <TextInputBox>
              <TextLabel htmlFor="tag">Tags</TextLabel>
              <SelectData
                id="tag"
                name="tag"
                value={tagValue}
                onChange={this.updateTagValue}
              >
                {optionsList.map(item => this.renderOptions(item))}
              </SelectData>
            </TextInputBox>
            <AddTaskBtn type="submit">Add Task</AddTaskBtn>
          </FormBox>
        </FormContainer>
        <TasksContainer>
          <TagsHeading>Tags</TagsHeading>
          <TagsContainer>
            {optionsList.map(tag => this.renderTagsBtn(tag))}
          </TagsContainer>
          <TasksHeading>Tasks</TasksHeading>
          <TasksBox>
            {updatedTasksList.length > 0 ? (
              updatedTasksList.map(task => this.renderEachTask(task))
            ) : (
              <li>
                <NoTasksContainer>
                  <NoTasks>No Tasks Added Yet</NoTasks>
                </NoTasksContainer>
              </li>
            )}
          </TasksBox>
        </TasksContainer>
      </MainContainer>
    )
  }
}

export default CreateTask
