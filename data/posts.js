import users from './users';
// https://images.pexels.com/photos/3658809/pexels-photo-3658809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/4108541/pexels-photo-4108541.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load
// https://images.pexels.com/photos/9634287/pexels-photo-9634287.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load
export default POSTS = [
  {
    user: users[0].user,
    profile_picture: users[0].imageURL,
    image: require('../assets/images/girl.jpg'),
    imageURL:
      'https://images.pexels.com/photos/9634287/pexels-photo-9634287.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',

    likes: 700,
    caption: 'Helo this is my post',
    comments: [
      {
        user: 'dummy 1',
        comment: 'Tôi ko yêu 1 đứa con gái nào cả :))))',
      },
      {
        user: 'dummy 2',
        comment: 'Wonderfull',
      },
    ],
  },
  {
    user: users[1].user,
    profile_picture: users[1].imageURL,
    image: require('../assets/images/girl2.png'),
    imageURL:
      'https://images.pexels.com/photos/4108541/pexels-photo-4108541.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    likes: 23,
    caption: 'Helo this is my second  post',
    comments: [
      {
        user: 'dummy 3',
        comment: 'Chắc ăn sáhimi xong bị ải chỉa đag bận ỉa nên k rep dc đó 🙂',
      },
      {
        user: 'dummy 4',
        comment:
          'Không biết thật hư ra sao nhưng có gì đâu , như t đây bạn thân nhắn tin nhiều lúc t seen quên rep ( không biết ST cố ý hay quên nhưng chuyện này có gì đâu mà nói nhỉ ) , t quên rep , nhiều lúc t còn tưởng t rep rồi cơ ý :))',
      },
    ],
  },
  {
    user: users[2].user,
    profile_picture: users[2].imageURL,
    image: require('../assets/images/girl3.jpg'),
    imageURL:
      'https://images.pexels.com/photos/3658809/pexels-photo-3658809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    likes: 231232,
    caption: 'Helo this is my third post',
    comments: [
      {
        user: 'dummy 3',
        comment: 'Chắc ăn sáhimi xong bị ải chỉa đag bận ỉa nên k rep dc đó 🙂',
      },
      {
        user: 'dummy 4',
        comment:
          'Không biết thật hư ra sao nhưng có gì đâu , như t đây bạn thân nhắn tin nhiều lúc t seen quên rep ( không biết ST cố ý hay quên nhưng chuyện này có gì đâu mà nói nhỉ ) , t quên rep , nhiều lúc t còn tưởng t rep rồi cơ ý :))',
      },
    ],
  },
];
