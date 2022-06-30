const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  const Header = () => {
    const course = 'Half Stack application development'

    const Content = () => {
      const part1 = 'Fundamentals of React'
      const part2 = 'Using props to pass data'
      const part3 = 'State of a component'

      return (
        <div>
          <Header course={course} />
          <Content part1={part1} />
          <Content part2={part2} />
          <Content part3={part3} />

          <Total exercises1={exercises1} /> + <Total exercises2={exercises2} /> + <Total exercises3={exercises3} />
        </div>
      )
    }
  }
}

// const

export default App;
