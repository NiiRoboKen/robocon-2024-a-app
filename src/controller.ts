export type Event =
  | StopEvent
  | MoveEvent
  | TurnEvent;

export type StopEvent = {
  type: "stop",
  value: null
}

export type MoveEvent = {
  type: "move",
  value: JoyStickXY
};

export type TurnEvent = {
  type: "turn",
  value: Turn
};

export type JoyStickXY = {
  x: number,
  y: number
};

export type Turn =
  | "left"
  | "right";

export class Controller {
  constructor(event: Event, collect: boolean, left_firing: boolean, right_firing: boolean) {
    this.event = event;
    this.collect = collect;
    this.left_firing = left_firing;
    this.right_firing = right_firing;
  }
  reset() {
    return new Controller(
      { "type": "stop", "value": null },
      false,
      false,
      false
    );
  }
  update_event(event: Event) {
    return new Controller(
      event,
      this.collect,
      this.left_firing,
      this.right_firing
    );
  }
  push_collect() {
    return new Controller(
      this.event,
      true,
      this.left_firing,
      this.right_firing
    );
  }
  push_left_firing() {
    return new Controller(
      this.event,
      this.collect,
      true,
      this.right_firing
    );
  }
  push_right_firing() {
    return new Controller(
      this.event,
      this.collect,
      this.left_firing,
      true
    );
  }
  // 同時に起こり得ないイベント
  event: Event;
  // 回収
  collect: boolean;
  // 発射
  left_firing: boolean;
  right_firing: boolean;
}
