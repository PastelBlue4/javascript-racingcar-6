import { MissionUtils } from "@woowacourse/mission-utils";

const { Random, Console } = MissionUtils;

class App {
  async userInputHandler() {
    const playerBeforeDivide = await Console.readLineAsync(
      "자동차 이름을 입력하세요.(이름은 쉼표(,)으로 구분, 공백없는 5글자 이하)\n"
    );
    const gameRound = await Console.readLineAsync(
      "게임을 시도할 횟수를 입력해 주세요.\n"
    );

    const playArray = playerBeforeDivide.split(",").trim();

    playArray.forEach((player) => {
      if (player === "") {
        throw new Error(
          "[ERROR] 공백없는 5자 이하의 자동차 이름만 가능합니다."
        );
      }
      if (player.length > 5) {
        throw new Error(
          "[ERROR] 공백없는 5자 이하의 자동차 이름만 가능합니다."
        );
      }
    });

    if (isNaN(gameRound) || gameRound >= 1) {
      throw new Error("[ERROR] 올바른 숫자를 입력해주세요.");
    }
  }

  async play() {}
}

export default App;
