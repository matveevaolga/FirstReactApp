import QuestionText from "./QuestionText";

const Question1 = () => {
    return (
      <div className="question">
      <QuestionText props="{Вопрос 1: Сколько будет 2 + 2?}"/>
      <div className="options">
        <label><input type="radio" name="q1" value="a" /> 3</label>
        <label><input type="radio" name="q1" value="b" /> 4</label>
        <label><input type="radio" name="q1" value="c" /> 5</label>
      </div>
    </div>
    )
  }

export default Question1;