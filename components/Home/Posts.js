import {Icon} from '@rneui/base';
import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const iconSize = 24;

function Posts({post}) {
  // const post = props.post;
  return (
    <View style={{marginBottom: 30}}>
      <Divider
        width={1}
        orientation="horizontal"
        style={{alignSelf: 'stretch', backgroundColor: '#C1C1C1'}}
      />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
      <CommentsSection post={post} />
      <Comments post={post} />
    </View>
  );
}

function PostHeader({post}) {
  // const post = props.post;
  return (
    <View style={styles.post}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.story} source={{uri: post.profile_picture}} />
        <Text style={{color: 'white', marginLeft: 5, fontWeight: '600'}}>
          {post.user}
        </Text>
      </View>
      <Text style={{color: 'white', fontWeight: '900'}}>...</Text>
    </View>
  );
}
function PostImage({post}) {
  return (
    <View style={{width: '100%', height: 450}}>
      <Image
        source={{uri: post.imageURL}}
        style={{flex: 1, width: '100%', height: '100%', resizeMode: 'cover'}}
      />
    </View>
  );
}
function PostFooter({post}) {
  return (
    <View
      style={{
        marginHorizontal: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <FontAwesome
              name="heart-o"
              size={iconSize}
              style={styles.footerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome
              name="comment-o"
              size={iconSize}
              style={styles.footerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" size={iconSize} style={styles.footerIcon} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Feather
              name="bookmark"
              size={iconSize}
              style={styles.footerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Likes post={post} />
      <Caption post={post} />
    </View>
  );
}

function Likes({post}) {
  return (
    <View>
      <Text
        style={{
          fontWeight: '400',
          fontSize: 16,
          marginLeft: 10,
          color: 'white',
          marginTop: 3,
        }}>
        {post.likes} likes
      </Text>
    </View>
  );
}

function Caption({post}) {
  return (
    <View>
      <Text style={styles.text}>
        <Text style={{fontWeight: '700'}}>{post.user}</Text>
        <Text> {post.caption}</Text>
      </Text>
    </View>
  );
}
function CommentsSection({post}) {
  return (
    <View>
      {!!post.comments.length && (
        <Text style={{color: 'gray', marginLeft: 20, marginTop: 5}}>
          View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}
          {post.comments.length > 1 ? ' comments' : ' comment'}
        </Text>
      )}
    </View>
  );
}

function Comments({post}) {
  return (
    <View>
      {post.comments.map(comment => (
        <Text style={{color: 'white', marginLeft: 20, marginTop: 3}}>
          <Text style={{fontWeight: '700'}}>{comment.user} </Text>
          <Text>{comment.comment}</Text>
        </Text>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
  },
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
  },
  footerIcon: {
    color: 'white',
    marginHorizontal: 10,
    marginTop: 10,
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    marginLeft: 10,
    color: 'white',
    marginTop: 3,
  },
});
export default Posts;
