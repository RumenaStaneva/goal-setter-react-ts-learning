import { FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  //better make them with state, but here I use useRef only for the exercise
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    onAddGoal(enteredGoal, enteredSummary);

    e.currentTarget.reset();
  }
  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" name="goal" id="goal" ref={goalRef} />
      </p>

      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" name="summary" id="summary" ref={summaryRef} />
      </p>

      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
