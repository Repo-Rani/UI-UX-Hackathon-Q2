import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaThumbsUp, FaThumbsDown, FaTrash, FaReply } from 'react-icons/fa';

interface Comment {
  id: number;
  name: string;
  email: string;
  comment: string;
  date: string;
  replies: Comment[];
  likes: number;
  dislikes: number;
}

const BlogComment: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<{ name: string; email: string; comment: string }>({ name: '', email: '', comment: '' });
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState<string>('');

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('blogComments') || '[]');
    setComments(storedComments);
  }, []);

  useEffect(() => {
    localStorage.setItem('blogComments', JSON.stringify(comments));
  }, [comments]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const comment: Comment = {
      id: Date.now(),
      ...newComment,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      replies: [],
      likes: 0,
      dislikes: 0,
    };
    setComments([...comments, comment]);
    setNewComment({ name: '', email: '', comment: '' });
  };

  const handleReply = (commentId: number) => {
    setReplyTo(commentId);
  };

  const submitReply = (commentId: number) => {
    if (!replyText.trim()) return;
    const newReply: Comment = {
      id: Date.now(),
      name: 'Anonymous',
      email: '',
      comment: replyText,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      replies: [],
      likes: 0,
      dislikes: 0,
    };
    setComments(comments.map(comment =>
      comment.id === commentId ? { ...comment, replies: [...comment.replies, newReply] } : comment
    ));
    setReplyTo(null);
    setReplyText('');
  };

  const handleLike = (commentId: number) => {
    setComments(comments.map(comment =>
      comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
    ));
  };

  const handleDislike = (commentId: number) => {
    setComments(comments.map(comment =>
      comment.id === commentId ? { ...comment, dislikes: comment.dislikes + 1 } : comment
    ));
  };

  const handleDelete = (commentId: number) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };


  return (
    <>
      <div className="w-[300px] md:w-[872px] h-[472px] relative top-[600px]">
        <h1 className="text-[24px] md:text-[32px] font-bold font-helvetica text-[#333333] text-left">
          Comments - {comments.length}
        </h1>
        {comments.map((comment) => (
          <div key={comment.id} className="w-[300px] md:w-[872px] h-[112px] relative top-[30px] flex justify-center md:gap-0 gap-[15px] md:justify-between">
            <Image
              src="/religious-woman-praying-with-rosary-beads-home 1.svg"
              height={97}
              width={109}
              alt=""
              className="md:w-[109px] w-[50px] h-[50px] md:h-[97px] rounded-full"
            />
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[30px] items-center">
                <h5 className="font-inter text-[14px] md:text-[16px] font-bold text-[#333333]">
                {comment.name}: {comment.comment}
                </h5>
                <div className="w-[62.13px] h-[22px] flex gap-[10px]">
                  <Image
                    src="/ArrowBendDoubleUpLeft.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="md:h-[18px] md:w-[18px] w-[12px] h-[12px]"
                  />
                  <button className="font-inter text-[12px] md:text-[14px] font-normal text-[#333333]" onClick={() => handleReply(comment.id)}><FaReply /> Reply
                  </button>
                </div>
              </div>
              <div className="w-[129px] h-[24px] flex gap-[10px]">
                <Image
                  src="/CalendarBlank.svg"
                  alt=""
                  width={26}
                  height={24}
                  className="md:w-[26px] md:h-[24px] w-[20px] h-[20px]"
                />
                <p className="font-helvetica text-[12px] md:text-[14px] font-normal text-[#7A7A7A] whitespace-nowrap">
                {comment.date}
                </p>
              </div>
              <p className="text-[12px] md:text-[16px] font-normal font-helvetica text-[#333333] md:leading-[24px] w-[250px] md:w-[746.6px]">
                {comment.comment}
              </p>
              <div className="flex gap-[10px]">
                <button onClick={() => handleLike(comment.id)}><FaThumbsUp /> {comment.likes}</button>
                <button onClick={() => handleDislike(comment.id)}><FaThumbsDown /> {comment.dislikes}</button>
              </div>

              {replyTo === comment.id && (
            <div>
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
              />
              <button onClick={() => submitReply(comment.id)} className='bg-[#ff9f0d] text-white '>Submit Reply</button>
            </div>
          )}
          {comment.replies.length > 0 && (
            <div>
              <h3>Replies:</h3>
              {comment.replies.map(reply => (
                <p key={reply.id}>{reply.name}: {reply.comment} ({reply.date}) </p>
            ))}
          </div>
        )}
      </div>
    </div>
  ))}

</div>
      <div className="w-[300px] md:w-[872px] h-[484px] relative top-[700px]">
        <h1 className="font-helvetica text-[18px] md:text-[24px] font-bold text-[#333333] text-start">
          Post a comment
        </h1>
        <div className="w-[300px] md:w-[872px] border-b-[1px] border-[#E0E0E0] relative top-[30px]"></div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={newComment.name}
            onChange={handleInputChange}
            className="w-[300px] h-[45px] md:w-[424px] md:h-[56px] border-[1px] border-[#E0E0E0] relative top-[60px] outline-none font-helvetica text-[14px] md:text-[16px] font-normal text-[#4F4F4F] px-3"
            placeholder="Name*"
            required
          />
          <input
            type="email"
            name="email"
            value={newComment.email}
            onChange={handleInputChange}
            className="w-[300px] h-[45px] md:w-[424px] md:h-[56px] border-[1px] border-[#E0E0E0] relative top-[75px] md:top-[60px] md:left-[25px] outline-none font-helvetica text-[14px] md:text-[16px] font-normal text-[#4F4F4F] px-3"
            placeholder="Email*"
            required
          />
          <textarea
            name="comment"
            value={newComment.comment}
            onChange={handleInputChange}
            placeholder="Write a comment"
            className="w-[300px] h-[180px] md:w-[872px] md:h-[244px] border-[1px] border-[#E0E0E0] relative top-[95px] md:top-[80px] text-[14px] md:text-[16px] px-6 py-4 outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-[200px] md:w-[212px] h-[45px] md:h-[56px] relative top-[115px] md:left-0 left-[40px] md:top-[100px] py-[16p] px-[48px] bg-[#FF9F0D] text-white hover:border-[#ff9f0d] hover:bg-white hover:text-[#ff9f0d] hover:border-[1px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer font-normal text-[14px] md:text-[16px] font-helvetica whitespace-nowrap"
          >
            Post a comment
          </button>
        </form>
      </div>
   
    </>
  );
};

export default BlogComment;