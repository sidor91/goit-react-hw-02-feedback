import React from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
 
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (e) => {
    const stateName = e.target.name;
    this.setState(prevState => ({
      [stateName]: prevState[stateName] + 1,
    }));
  };

  render() {
    const { good, neutral, bad} = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        {(good + neutral + bad) > 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
