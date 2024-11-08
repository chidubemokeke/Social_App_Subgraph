import {
  CommentAdded as CommentAddedEvent,
  EtherWithdrawn as EtherWithdrawnEvent,
  Followed as FollowedEvent,
  MessageSent as MessageSentEvent,
  PostCreated as PostCreatedEvent,
  PostDeleted as PostDeletedEvent,
  PostEdited as PostEditedEvent,
  PostLiked as PostLikedEvent,
  PostUnliked as PostUnlikedEvent,
  ProfileCreated as ProfileCreatedEvent,
  Unfollowed as UnfollowedEvent
} from "../generated/SocialNetwork/SocialNetwork"
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
} from "../generated/schema"

export function handleCommentAdded(event: CommentAddedEvent): void {
  let entity = new CommentAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.commenter = event.params.commenter
  entity.postID = event.params.postID
  entity.comment = event.params.comment

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEtherWithdrawn(event: EtherWithdrawnEvent): void {
  let entity = new EtherWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFollowed(event: FollowedEvent): void {
  let entity = new Followed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.follower = event.params.follower
  entity.following = event.params.following

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMessageSent(event: MessageSentEvent): void {
  let entity = new MessageSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.recipient = event.params.recipient
  entity.message = event.params.message

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostCreated(event: PostCreatedEvent): void {
  let entity = new PostCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.author = event.params.author
  entity.postID = event.params.postID
  entity.postType = event.params.postType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostDeleted(event: PostDeletedEvent): void {
  let entity = new PostDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.author = event.params.author
  entity.postID = event.params.postID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostEdited(event: PostEditedEvent): void {
  let entity = new PostEdited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.editor = event.params.editor
  entity.postID = event.params.postID
  entity.newDescription = event.params.newDescription

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostLiked(event: PostLikedEvent): void {
  let entity = new PostLiked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.liker = event.params.liker
  entity.postID = event.params.postID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostUnliked(event: PostUnlikedEvent): void {
  let entity = new PostUnliked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.unliker = event.params.unliker
  entity.postID = event.params.postID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProfileCreated(event: ProfileCreatedEvent): void {
  let entity = new ProfileCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.name = event.params.name
  entity.userID = event.params.userID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnfollowed(event: UnfollowedEvent): void {
  let entity = new Unfollowed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.follower = event.params.follower
  entity.following = event.params.following

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
