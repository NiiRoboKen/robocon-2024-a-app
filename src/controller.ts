type Move =
  | "stop"
  | "front"
  | "back"
  | "left"
  | "right"
  | "leftTurn"
  | "rightTurn";

class Controller {
  constructor() {
    this.joystick_x = 0;
    this.joystick_y = 0;
    this.move = "stop";
    this.collect = false;
    this.left_firing = false;
    this.right_firing = false;
    this.left_winding = false;
    this.right_winding = false;
  }
  update_joystick(x: number, y: number) {
    this.joystick_x = x;
    this.joystick_y = y;
  }
  update_move(move: Move) {
    this.move = move;
  }
  update_collect(a: boolean) {
    this.collect = a;
  }
  update_left_firing(a: boolean) {
    this.left_firing = a;
  }
  update_right_firing(a: boolean) {
    this.right_firing = a;
  }
  update_left_winding(a: boolean) {
    this.left_winding = a;
  }
  update_right_winding(a: boolean) {
    this.right_winding = a;
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
