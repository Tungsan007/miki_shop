import axios from 'axios';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import AvartarChat from 'src/components/avartarChat';
import Caculate from 'src/components/calculate';
import { IconStar, IconTheEnd, IconUpload, IconXX } from 'src/components/icons';
import ReviewStar from 'src/components/reviewStart';
import { tabUIState } from 'src/recoils/tabUIState';

export default function ProductDetailsSection2({ product, feedback }) {
  const [stateImageReview, setImageReview] = useState(null);
  const [toogleTab, setToogleTab] = useRecoilState(tabUIState);
  const [stateImg, setStateImg] = useState([]);
  const [check, setCheck] = useState(true);
  const [stateDsc, setStateDsc] = useState('');
  const [stateStar, setStateStar] = useState({});
  if (stateImageReview && check) {
    let imgArr = [];
    const showImg = () => {
      let file;
      for (let i = 0; i < stateImageReview?.length; i++) {
        let reader = new FileReader();
        file = stateImageReview[i];
        reader.readAsDataURL(file);
        reader.onload = () => {
          imgArr.push(reader.result);
          if (i === stateImageReview?.length - 1 && stateImageReview?.length > 1) {
            setStateImg(imgArr);
          } else if (stateImageReview?.length === 1) {
            setStateImg(imgArr);
          }
        };
      }
      setCheck(false);
    };
    showImg();
  }
  const handleSubmitReview = async () => {
    setStateDsc('');
    setStateStar({});
    setImageReview(null);
    setStateImg([]);
    const starRating = stateStar?.index?.toString().length;
    const res = await axios({
      method: 'POST',
      url: '/api/image/upload',
      data: { files: [...stateImg] },
    });
    // setResImg(res.data.result)
    // console.log({files: [...stateImg]})
    const res2 = await axios({
      method: 'POST',
      url: '/api/feedback/create',
      data: {
        rating: starRating,
        desc: stateDsc,
        images: res?.data?.result,
        productId: product._id,
        userId: '6343d9f3f88baae04235262f',
      },
    });
  };
  const DeleteFileSelect = (index) => {
    setImageReview(Object.values(stateImageReview).filter((item, indexF) => indexF != index));
    setStateImg(Object.values(stateImg).filter((item, indexF) => indexF != index));
  };
  return (
    <>
      <div className="px-[152px] tracking-[-0.019em] scroll-smooth">
        <ul className="ulTabUiPro_2">
          <li
            className={toogleTab === 1 ? 'activeTabItem cursor-pointer' : 'cursor-pointer'}
            onClick={() => setToogleTab(1)}
          >
            Mô tả
          </li>
          <li
            className={toogleTab === 2 ? 'activeTabItem cursor-pointer' : 'cursor-pointer'}
            onClick={() => setToogleTab(2)}
          >
            Bảo hành và Hoàn trả
          </li>
          <li
            className={toogleTab === 3 ? 'activeTabItem cursor-pointer' : 'cursor-pointer'}
            onClick={() => setToogleTab(3)}
          >
            Vận chuyển
          </li>
          <li
            className={toogleTab === 4 ? 'activeTabItem cursor-pointer' : 'cursor-pointer'}
            onClick={() => setToogleTab(4)}
          >
            Đánh giá
            <p className="inline-block">(02)</p>
          </li>
        </ul>
        <div className={toogleTab === 1 ? 'pDescPro_2 activeContent' : 'hidden'}>
          <p>{product?.desc}</p>
        </div>
        <div className={toogleTab === 2 ? 'pDescPro_2_2 activeContent' : 'hidden'}>
          <div className="flex justify-between w-full">
            <div>
              <h1 className="textTitle">Chính sách bảo hành:</h1>
              <p>(Áp dụng cho vàng 18k) </p>
            </div>
            <table className="w-[800px] h-[128px] boderTable text-justify rounded-[4px]">
              <thead>
                <tr>
                  <th className="h-[42px] px-[8px] boderTable">Nội dung</th>
                  <th className="h-[42px] px-[8px] bboderTable">Thời gian</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="h-[42px] px-[8px] boderTable">Làm sạch sản phẩm</td>
                  <td className="h-[42px] px-[8px] boderTable">Trọn đời</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="h-[42px] px-[8px] boderTable">Đánh bóng và xi mới</td>
                  <td className="h-[42px] px-[8px] boderTable">05 lần</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="flex w-full justify-between mt-[32px]">
            <h1 className="textTitle">Phí bảo hành:</h1>
            <table className="w-[800px] h-[128px] boderTable text-justify rounded-[4px]">
              <thead>
                <tr>
                  <th className="h-[42px] px-[8px] boderTable">Nội dung bảo hành</th>
                  <th className="h-[42px] px-[8px] boderTable"> Chi phí bảo hành (/lần)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="h-[42px] px-[8px] boderTable">Sửa độ rung với sản phẩm Ladanse</td>
                  <td className="h-[42px] px-[8px] boderTable">200.000 đ</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="h-[42px] px-[8px] boderTable">Làm mới sản phẩm</td>
                  <td className="h-[42px] px-[8px] boderTable">50.000 đ</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <h1 className="textTitle mt-[32px]">Lưu ý: </h1>
          <p>
            Sản pẩm không còn nguyên vẹn hoặc mất hóa đơn, Miki sẽ thâu mua lại với 80% giá trị sản
            phẩm.
          </p>
          <p>
            Các sản pẩm trang sức bạc, mạ vàng, vòng đá, dây da các loại, chuỗi ngọc trai: Miki
            không mua lại
          </p>
        </div>
        <div
          className={
            toogleTab === 3
              ? 'font-medium mt-[44px] w-[1132px] tracking-[-0.019em] activeContent'
              : 'hidden'
          }
        >
          <div className="w-full leading-[34px]">
            <div>
              <h1 className="textTitle">Chính sách vận chuyển</h1>
              <p>
                Với đối tác giao hàng uy tín, có mua bảo hiểm hàng hóa, thời gian giao hàng nhanh và
                đúng hẹn:
              </p>
            </div>
            <table className="w-[940px] borderTable ml-[110px] mt-[24px]">
              <thead>
                <tr>
                  <th className="boderTable h-[42px] px-[8px] text-left">Nội dung</th>
                  <th className="boderTable h-[42px] px-[8px] text-left">Thời gian</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="boderTable h-[42px] px-[8px] text-left">Làm sạch sản phẩm</td>
                  <td className="boderTable h-[42px] px-[8px] text-left">Trọn đời</td>
                </tr>
                <tr>
                  <td className="boderTable h-[42px] px-[8px] text-left">Đánh bóng và xi mới</td>
                  <td className="boderTable h-[42px] px-[8px] text-left">05 lần</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-[28px] text-red-500 font-medium">**** Chú ý: </p>
            <p>
              Với sản phẩm giảm giá khuyến mãi từ 20% trở lên khách hàng sẽ chịu hoàn toàn phí giao
              hàng.
            </p>
          </div>
        </div>
        <div
          id="review"
          className={
            toogleTab === 4
              ? 'font-medium mt-[44px] w-[1132px] tracking-[-0.019em] activeContent'
              : 'hidden'
          }
        >
          <h1 className="textTitle">Danh gia san pham</h1>
          <div className="flex">
            <div className="ml-[60px]">
              <div>
                {(() => {
                  let total = 0;
                  for (let i = 0; i < feedback?.length; i++) {
                    total += Number(feedback[i]?.rating);
                  }
                  const rating = Math.round(total / feedback?.length);
                  if (feedback?.length !== 0) {
                    return <p className="font-medium text-base ml-[24px] mt-[13px]">{rating}.0</p>;
                  } else {
                    return <p className="mr-[5px]">0/5</p>;
                  }
                })()}
              </div>
              <div>
                {feedback.length !== 0 ? (
                  <Caculate feedback={feedback} />
                ) : (
                  <div className="flex mt-[2px] w-[80px] h-[15px] mr-[8px]">
                    <IconStar fill="#A9A9A9" />
                    <IconStar fill="#A9A9A9" />
                    <IconStar fill="#A9A9A9" />
                    <IconStar fill="#A9A9A9" />
                    <IconStar fill="#A9A9A9" />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap mt-[2px]">
              <ReviewStar type="Tất cả" />
              <ReviewStar type={`5 Sao (${'0'})`} />
              <ReviewStar type={`4 Sao (${'0'})`} />
              <ReviewStar type={`3 Sao (${'0'})`} />
              <ReviewStar type={`2 Sao (${'2'})`} />
              <ReviewStar type={`1 Sao (${'0'})`} />
              <ReviewStar type={`Có bình luận (${'0'})`} />
              <ReviewStar type={`Có hình ảnh/ video (${'0'})`} />
            </div>
          </div>
          <AvartarChat
            src="/assets/images/avatar_demo.png"
            userName="Tranngocanh847"
            productname={product?.name}
            feedback={feedback}
          />
          <div className="w-full py-[17px] px-[58px] mt-[24px] bg-[#FFFFFF]">
            <p className="text-base font-bold">Đánh giá sản phẩm này*</p>
            <div className="flex">
              <div onClick={() => setStateStar({ index: 1, fillState: '#FBBC05' })}>
                <IconStar
                  className="starReviewPro_2"
                  fill={stateStar.index >= 1 ? stateStar.fillState : '#A9A9A9'}
                />
              </div>
              <div onClick={() => setStateStar({ index: 12, fillState: '#FBBC05' })}>
                <IconStar
                  className="starReviewPro_2"
                  fill={stateStar.index >= 12 ? stateStar.fillState : '#A9A9A9'}
                />
              </div>
              <div onClick={() => setStateStar({ index: 123, fillState: '#FBBC05' })}>
                <IconStar
                  className="starReviewPro_2"
                  fill={stateStar.index >= 123 ? stateStar.fillState : '#A9A9A9'}
                />
              </div>
              <div onClick={() => setStateStar({ index: 1234, fillState: '#FBBC05' })}>
                <IconStar
                  className="starReviewPro_2"
                  fill={stateStar.index >= 1234 ? stateStar.fillState : '#A9A9A9'}
                />
              </div>
              <div onClick={() => setStateStar({ index: 12345, fillState: '#FBBC05' })}>
                <IconStar
                  className="starReviewPro_2"
                  fill={stateStar.index === 12345 ? stateStar.fillState : '#A9A9A9'}
                />
              </div>
            </div>
            <ul className="flex justify-between mt-[16px]">
              <li className="text-base font-bold">Bình luận*</li>
              <li>Ký tự còn lại 250</li>
            </ul>
            <div className="wrapInProDetail_2">
              <input
                value={stateDsc}
                onChange={(e) => setStateDsc(e.target.value)}
                className="inputDescProDetail_2"
                type="text"
                placeholder="Nhập mô tả tại đây"
              />
            </div>
            {stateImg?.map((img, index) => {
              return (
                <div className="relative mt-[6px] inline-block ml-[10px]">
                  <IconXX
                    DeleteFileSelect={DeleteFileSelect}
                    indexDele={index}
                    className="absolute top-[-8px] left-[42px]"
                    fill="white"
                  />
                  <img className="w-[64px] h-[120px]" src={img} alt="anh" />
                </div>
              );
            })}
            <ul className="flex mt-[16px] items-center">
              <li className="text-neutral_1 font-bold text-base">
                Thêm hình ảnh/video sản phẩm nếu có:
              </li>
              <input
                id="picReview"
                className="hidden"
                type="file"
                multiple
                onChange={(e) => {
                  e.target.files === [] ? null : setImageReview(e.target.files), setCheck(true);
                }}
              />
              <label htmlFor="picReview" className="uploadImgProDetail_2">
                <IconUpload className="ml-[13px] mr-[9px]" />
                Ảnh/Video
              </label>
            </ul>
            <div className="mt-[16px] flex justify-end">
              <button className="btnSkipProDetail_2">Bỏ qua</button>
              <button onClick={() => handleSubmitReview()} className="btnSendProDetail_2">
                Gửi
              </button>
            </div>
          </div>
        </div>
        <IconTheEnd className="ml-[26%] mt-[60px]" />
      </div>
    </>
  );
}
