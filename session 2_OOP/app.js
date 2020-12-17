class User {
    name;
    age;
    gender;
    description
    image;
    constructor(name, age, gender, description, image) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.description = description;
        this.image = image;
    }

    like() {}
    unlike() {}
    update(name, age, gender, description, image) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.description = description;
        this.image = image;
    }

    toHTML() {
        return `
    <div class="user-container">
        <div class="previous">
            <
        </div>
        <img src="${this.image}"/>
        <div class="info">
            ${this.name}
            ${this.age}
            ${this.description}
        </div>
        <div class="next">
            >
        </div>
    </div>
    `
    }
}
class UserCollection {
    listUser;
    current;
    constructor() {
        this.listUser = []
        this.current = 0
    }
    addUser(user) {
        this.listUser.push(user)
    }
    removeUser(index) {
        this.listUser.slice(index, 1)
    }
    show() {
        document.querySelector('#app').innerHTML = this.listUser[this.current].toHTML()
    }
    previous() {
        if (this.current > 0) {
            this.current--
            this.show()
        }
    }
    next() {
        if (this.current < this.listUser.length - 1) {
            this.current++
            this.show()
        }
    }
    listUserClick() {
        document.querySelector('.previous').addEventListener('click', () => {
            userCollection.previous()
        })
        document.querySelector('.previous').addEventListener('click', () => {
            userCollection.next()
        })
    }
}
const userCollection = new UserCollection()
const user1 = new User(
    'Ngô Bá Khá',
    27,
    'Male',
    'Ôi bạn ơi! Sức đề kháng kém là do bạn không chơi đồ đấy bạn ạ',
    'https://media.laodong.vn/Storage/NewsPortal/2019/4/2/666434/11.jpg?w=888&h=592&crop=auto&scale=both'
)
const user2 = new User(
    'Bùi Xuân Huấn',
    36,
    'Male',
    'Xã hội lày chỉ có làm, chịu khó, cần cù bù thì siêng năng',
    'https://i1-vnexpress.vnecdn.net/2020/06/16/huanhoahong-4085-1592292746-3974-1592294201.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=FtHhtbCXTHblSbHBUW9z9g'
)
userCollection.addUser(user1);
userCollection.addUser(user2)
userCollection.show();
