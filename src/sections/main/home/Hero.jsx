import Image from 'next/image';
import Button from 'src/components/Button';

export function HeroSection() {
  return (
    <>
      <div
        className="overflow-hidden w-[1440px] h-[629px] bg-[#00000099] relative z-[10]
     bg-[url('/assets/images/heroSection.jpg')] bg-center bg-cover bg-no-repeat"
      >
        <div className="bg-[#00000099] h-[629px] text-center">
          <p className="text-neutral_5 font-playfair text-[96px] leading-[128px] pt-[137px]">
            Thế giới nữ trang
          </p>
          <p className="text-neutral_5 text-[24px] leading-[29.26px] py-5 border-solid border-y-2 border-neutral_5 mx-auto my-9 w-[824px]">
            Tôn vinh vẻ đẹp phái nữ - Trao quà tặng - Trao yêu thương
          </p>
          <Button
            title={'Tìm hiểu thêm'}
            className={
              'px-6 py-2 mt-6 text-base font-bold rounded-btnB bg-neutral_5 w-[171px] h-[40px]'
            }
          />
        </div>
      </div>
    </>
  );
}

{
  /* <p className='text-neutral_5 font-playfair text-[96px] leading-[128px] mt-[137px]'>Thế giới nữ trang</p>
        <p className='text-neutral_5 text-[24px] leading-[29.26px] py-5 border-solid border-y-2 border-neutral_5 mx-auto my-9 w-[824px]'>Tôn vinh vẻ đẹp phái nữ - Trao quà tặng - Trao yêu thương</p>
        <Button
          title={'Tìm hiểu thêm'}
          className={'px-6 py-2 mt-6 text-base font-bold rounded-btnB bg-neutral_5 w-[171px] h-[40px]'}
        /> */
}

///assets/images/heroSection.jpg
