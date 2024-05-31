import Button from 'src/components/Button';

export function LatestCollectionSection() {
  return (
    <div className="w-full h-[732px] relative ">
      <div
        className=" w-full h-[732px] 
        overflow-hidden
     
      relative
      my-[60px]
      "
      >
        <img
          src="/assets/images/latestCollection.jpg"
          className="absolute left-6 scale-[1.4] translate-x-[15rem] translate-y-[-85px] "
        />
        <img className="absolute top-[109px] left-[793px]" src="/assets/vectorLatest/Line2.png " />
        <img
          className="absolute top-[109px] left-[152px]"
          src="/assets/vectorLatest/Vector 1.png "
        />
        <h2 className="text-5xl text-neutral_5 leading-[64px] absolute top-[153px] left-[208px] font-medium font-main">
          Bộ sưu tập mới nhất
        </h2>
        <h2 className="text-5xl text-neutral_5 leading-[64px] absolute top-[273px] left-[250px] font-semibold font-playfair">
          Ánh trăng người tình
        </h2>
        <p className="absolute top-[353px] left-[250px] font-playfair font-semibold w-[353px] h-[84px] text-[16px] leading-[21,33px] text-neutral_5">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>

        <Button
          title="Xem thêm"
          className={
            'w-[152px] h-[50px] text-center text-[#2D2D2D2] font-bold leading-[26px] bg-neutral_5 rounded-btnB absolute top-[501px] left-[250px]'
          }
        />
      </div>
      <img
        className="absolute top-[374px] left-[1112px]"
        src="/assets/vectorLatest/Ellipse3.png "
      />
      <img
        className="absolute top-[508px] left-[1244px]"
        src="/assets/vectorLatest/Ellipse4.png "
      />
      <img
        className="absolute top-[668px] left-[1405px]"
        src="/assets/vectorLatest/Ellipse5.png "
      />
    </div>
  );
}
