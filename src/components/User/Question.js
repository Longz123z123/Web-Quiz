import _ from 'lodash';

const Question = (props) => {
  const { data, index } = props;
  if (_.isEmpty(data)) {
    return <></>;
  }
  const handleHandleCheckBox = (event, aId, qId) => {
    // console.log("check: ", event.target.checked);
    props.handleCheckBox(aId, qId);
  };
  return (
    <>
      {data.image ? (
        <div className="q-image">
          <img src={`data:image/jpeg;base64,${data.image}`} />
        </div>
      ) : (
        <div className="q-image"></div>
      )}
      <div className="question">
        Question {index + 1}: {data.questionDes} ?
      </div>
      <div className="answer">
        {data.answers &&
          data.answers.length &&
          data.answers.map((answer, index) => {
            return (
              <div key={`answer-${index}`} className="a-child">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={answer.isSelected}
                    onChange={(event) =>
                      handleHandleCheckBox(event, answer.id, data.questionId)
                    }
                  />
                  <label className="form-check-label">
                    {answer.description}
                  </label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Question;
