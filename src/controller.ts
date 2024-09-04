type Move =
  | "stop"
  | "front"
  | "back"
  | "left"
  | "right"
  | "leftTurn"
  | "rightTurn";

class Controller {
  constructor(
    joystick_x: number,
    joystick_y: number,
    move: Move,
    collect: boolean,
    left_firing: boolean,
    right_firing: boolean,
    left_winding: boolean,
    right_winding: boolean,
  ) {
    this.joystick_x = joystick_x;
    this.joystick_y = joystick_y;
    this.move = move;
    this.collect = collect;
    this.left_firing = left_firing;
    this.right_firing = right_firing;
    this.left_winding = left_winding;
    this.right_winding = right_winding;
  }
  update_joystick(x: number, y: number): Controller {
    return new Controller(
      x,
      y,
      this.move,
      this.collect,
      this.left_firing,
      this.right_firing,
      this.left_winding,
      this.right_winding,
    );
  }
  update_move(move: Move): Controller {
    return new Controller(
      this.joystick_x,
      this.joystick_y,
      move,
      this.collect,
      this.left_firing,
      this.right_firing,
      this.left_winding,
      this.right_winding,
    );
  }
  update_collect(collect: boolean) {
    return new Controller(
      this.joystick_x,
      this.joystick_y,
      this.move,
      collect,
      this.left_firing,
      this.right_firing,
      this.left_winding,
      this.right_winding,
    );
  }
  update_left_firing(left_firing: boolean) {
    return new Controller(
      this.joystick_x,
      this.joystick_y,
      this.move,
      this.collect,
      left_firing,
      this.right_firing,
      this.left_winding,
      this.right_winding,
    );
  }
  update_right_firing(right_firing: boolean) {
    return new Controller(
      this.joystick_x,
      this.joystick_y,
      this.move,
      this.collect,
      this.left_firing,
      right_firing,
      this.left_winding,
      this.right_winding,
    );
  }
  update_left_winding(left_winding: boolean) {
    return new Controller(
      this.joystick_x,
      this.joystick_y,
      this.move,
      this.collect,
      this.left_firing,
      this.right_firing,
      left_winding,
      this.right_winding,
    );
  }
  update_right_winding(right_winding: boolean) {
    return new Controller(
      this.joystick_x,
      this.joystick_y,
      this.move,
      this.collect,
      this.left_firing,
      this.right_firing,
      this.left_winding,
      right_winding,
    );
  }

  joystick_x: number;
  joystick_y: number;
  move: Move;
  // 回収
  collect: boolean;
  // 発射
  left_firing: boolean;
  right_firing: boolean;
  // 巻取り
  left_winding: boolean;
  right_winding: boolean;
}
