function gettime() {
  let currentTime = new Date();
  return `${currentTime.getHours()}:${currentTime.getMinutes()}`;
}
class Message {
  name;
  time;
  text;
  constructor(author, text) {
    this.author = author;
    this.time = gettime();
    this.text = text;
  }
  toString() {
    return `${this.time} ${this.author}: ${this.text}`;
  }
}
class Messenger {
  messageHistory = [];

  show_history() {
    this.messageHistory.forEach((text) => {
      console.log(text.toString());
    });
  }
  send(author, text) {
    this.messageHistory.push(new Message(author, text));
  }
}

let messenger = new Messenger();
messenger.send("Renar", "Нужно много учится");
messenger.send("Nihad", "Неохота");
messenger.show_history();
