import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CommentAdded,
  EtherWithdrawn,
  Followed,
  MessageSent,
  PostCreated,
  PostDeleted,
  PostEdited,
  PostLiked,
  PostUnliked,
  ProfileCreated,
  Unfollowed
} from "../generated/SocialNetwork/SocialNetwork"

export function createCommentAddedEvent(
  commenter: Address,
  postID: BigInt,
  comment: string
): CommentAdded {
  let commentAddedEvent = changetype<CommentAdded>(newMockEvent())

  commentAddedEvent.parameters = new Array()

  commentAddedEvent.parameters.push(
    new ethereum.EventParam("commenter", ethereum.Value.fromAddress(commenter))
  )
  commentAddedEvent.parameters.push(
    new ethereum.EventParam("postID", ethereum.Value.fromUnsignedBigInt(postID))
  )
  commentAddedEvent.parameters.push(
    new ethereum.EventParam("comment", ethereum.Value.fromString(comment))
  )

  return commentAddedEvent
}

export function createEtherWithdrawnEvent(
  owner: Address,
  amount: BigInt,
  timestamp: BigInt
): EtherWithdrawn {
  let etherWithdrawnEvent = changetype<EtherWithdrawn>(newMockEvent())

  etherWithdrawnEvent.parameters = new Array()

  etherWithdrawnEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  etherWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  etherWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return etherWithdrawnEvent
}

export function createFollowedEvent(
  follower: Address,
  following: Address
): Followed {
  let followedEvent = changetype<Followed>(newMockEvent())

  followedEvent.parameters = new Array()

  followedEvent.parameters.push(
    new ethereum.EventParam("follower", ethereum.Value.fromAddress(follower))
  )
  followedEvent.parameters.push(
    new ethereum.EventParam("following", ethereum.Value.fromAddress(following))
  )

  return followedEvent
}

export function createMessageSentEvent(
  sender: Address,
  recipient: Address,
  message: string
): MessageSent {
  let messageSentEvent = changetype<MessageSent>(newMockEvent())

  messageSentEvent.parameters = new Array()

  messageSentEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  messageSentEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  messageSentEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )

  return messageSentEvent
}

export function createPostCreatedEvent(
  author: Address,
  postID: BigInt,
  postType: string
): PostCreated {
  let postCreatedEvent = changetype<PostCreated>(newMockEvent())

  postCreatedEvent.parameters = new Array()

  postCreatedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("postID", ethereum.Value.fromUnsignedBigInt(postID))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("postType", ethereum.Value.fromString(postType))
  )

  return postCreatedEvent
}

export function createPostDeletedEvent(
  author: Address,
  postID: BigInt
): PostDeleted {
  let postDeletedEvent = changetype<PostDeleted>(newMockEvent())

  postDeletedEvent.parameters = new Array()

  postDeletedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )
  postDeletedEvent.parameters.push(
    new ethereum.EventParam("postID", ethereum.Value.fromUnsignedBigInt(postID))
  )

  return postDeletedEvent
}

export function createPostEditedEvent(
  editor: Address,
  postID: BigInt,
  newDescription: string
): PostEdited {
  let postEditedEvent = changetype<PostEdited>(newMockEvent())

  postEditedEvent.parameters = new Array()

  postEditedEvent.parameters.push(
    new ethereum.EventParam("editor", ethereum.Value.fromAddress(editor))
  )
  postEditedEvent.parameters.push(
    new ethereum.EventParam("postID", ethereum.Value.fromUnsignedBigInt(postID))
  )
  postEditedEvent.parameters.push(
    new ethereum.EventParam(
      "newDescription",
      ethereum.Value.fromString(newDescription)
    )
  )

  return postEditedEvent
}

export function createPostLikedEvent(
  liker: Address,
  postID: BigInt
): PostLiked {
  let postLikedEvent = changetype<PostLiked>(newMockEvent())

  postLikedEvent.parameters = new Array()

  postLikedEvent.parameters.push(
    new ethereum.EventParam("liker", ethereum.Value.fromAddress(liker))
  )
  postLikedEvent.parameters.push(
    new ethereum.EventParam("postID", ethereum.Value.fromUnsignedBigInt(postID))
  )

  return postLikedEvent
}

export function createPostUnlikedEvent(
  unliker: Address,
  postID: BigInt
): PostUnliked {
  let postUnlikedEvent = changetype<PostUnliked>(newMockEvent())

  postUnlikedEvent.parameters = new Array()

  postUnlikedEvent.parameters.push(
    new ethereum.EventParam("unliker", ethereum.Value.fromAddress(unliker))
  )
  postUnlikedEvent.parameters.push(
    new ethereum.EventParam("postID", ethereum.Value.fromUnsignedBigInt(postID))
  )

  return postUnlikedEvent
}

export function createProfileCreatedEvent(
  user: Address,
  name: string,
  userID: BigInt
): ProfileCreated {
  let profileCreatedEvent = changetype<ProfileCreated>(newMockEvent())

  profileCreatedEvent.parameters = new Array()

  profileCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  profileCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  profileCreatedEvent.parameters.push(
    new ethereum.EventParam("userID", ethereum.Value.fromUnsignedBigInt(userID))
  )

  return profileCreatedEvent
}

export function createUnfollowedEvent(
  follower: Address,
  following: Address
): Unfollowed {
  let unfollowedEvent = changetype<Unfollowed>(newMockEvent())

  unfollowedEvent.parameters = new Array()

  unfollowedEvent.parameters.push(
    new ethereum.EventParam("follower", ethereum.Value.fromAddress(follower))
  )
  unfollowedEvent.parameters.push(
    new ethereum.EventParam("following", ethereum.Value.fromAddress(following))
  )

  return unfollowedEvent
}
