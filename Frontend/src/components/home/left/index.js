import LeftLink from './LeftLink';
import { left } from '../../../data/home';
import { Link } from 'react-router-dom';
import { ArrowDown1 } from '../../../svg';
import { useState } from 'react';
import Shortcut from './Shortcut';

export default function LeftHome({user}) {
  const [visible, setVisible] = useState(false);
  return (
    <div className='fixed mt-[50px] p-[15px_0] pb-[5rem] left-[6px] max-h-[100vh] w-[300px] overflow-y-auto select-none text-primary-color scrollbar'>
      <Link to='/profile' className="flex items-center p-[5px_10px] rounded-[10px] cursor-pointer font-semibold text-[14px] mb-[2px] hover:hover1">
        <img src={user?.picture} alt="" className='w-[36px] h-[36px] rounded-[50%] mr-[11px] align-[-0.25em]'/>
        <span className='mb-[4px] ml-[1px]'>
          {user?.first_name} {user?.last_name}
        </span>
      </Link>
      {
        left.slice(0,5).map((link, i) => (
          <LeftLink key={i} img={link.img} notification={link.notification} text={link.text} />
        ))
      }
      {!visible && (
        <div className='flex items-center p-[5px_10px] rounded-[10px] cursor-pointer font-semibold text-[14px] mb-[2px] hover:hover1' onClick={() => {setVisible(true)}}>
          <div className="small_circle">
            <ArrowDown1 />
          </div>
          <span>See More</span>
        </div>
      )}
      {visible && (
        <div className="">
          {
            left.slice(5, left.length).map((link, i) => (
              <LeftLink key={i} img={link.img} notification={link.notification} text={link.text} />
            ))
          }
          <div className='flex items-center p-[5px_10px] rounded-[10px] cursor-pointer font-semibold text-[14px] mb-[2px] hover:hover1' onClick={() => {setVisible(false)}}>
            <div className="small_circle rotate-180">
              <ArrowDown1 />
            </div>
            <span>Show Less</span>
          </div>
        </div>
      )}
      <div className="h-[1.3px] bg-divider m-[9px_2px_0_12px]"></div>
      <div className="flex items-center justify-between pr-[10px]">
        <div className="text-[16px] font-semibold p-[13px_10px_11px_10px] text-secondary-color">Your Shortcuts</div>
        <div className="text-[14px] text-blue-color cursor-pointer">Edit</div>
      </div>
      <div>
        <Shortcut link="https://www.youtube.com/" img="../../images/ytb.png" name="My Youtube Channel" />
        <Shortcut link="https://www.instagram.com/" img="../../images/insta.png" name="My Instagram" />
      </div>
      <div className={`fixed bottom-[14px] text-[12px] text-secondary-color left-[10px] ${visible && "relative w-[96%] mt-[2rem]"}`}>
        <Link to="/">Privacy </Link><span>. </span>
        <Link to="/">Terms </Link><span>. </span>
        <Link to="/">Advertising </Link><span>. </span>
        <Link to="/">Ad Choices<i className="ad_choices_icon"></i> </Link><span>. </span>
        <Link to="/">Cookies </Link><span>. </span>
        <Link to="/">More </Link><span>. </span><br />
        SocioConnect&copy;2022
      </div>
    </div>
  )
}
