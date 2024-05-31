import Link from 'next/link';

import Button from 'src/components/Button';

export default function Datas(props) {
  const { data } = props;

  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  })

  return (
    <>
      <div className="flex flex-wrap  gap-10 ">
        {
          data.map((product) => {
            return (
              <div key={product._id} className="w-[254px] h-[442px] relative mt-10 border-none">
                <Link href={`/products/${product.slug}`}>
                  <a>
                    <img
                      src={product.picture[0].url}
                      className="w-full rounded-imgB h-[254px] "
                      alt={product.name}
                    />
                    <h5 className="mt-6 h-14 overflow-hidden text-center font-main font-bold text-xl tracking-[-1.9%] text-neutral_1">
                      {product.name}
                    </h5>
                    <h5 className="absolute bottom-[56px] left-0 right-0 text-center font-main font-bold text-xl tracking-[0.019rem] text-primary_2">
                      {formatter.format((product.amount[0].cost))}
                    </h5>
                  </a>
                </Link>
                <Link href={`/products/${product.slug}`}>
                  <Button
                    title="Thêm vào giỏ hàng"
                    className="font-bold text-base tracking-[0.15px] text-center text-white 
                bg-[#251C17]
                w-full
                h-10
                rounded-btnB
                    absolute
                    bottom-0
                    hover:bg-[#0000] 
                                      hover:text-neutral_1
                                      hover:border-solid
                                       hover:border-[1px]
                                        hover:border-[#000]
                "
                  />
                </Link>
              </div>
            );
          })

        }
      </div>

    </>
  );
}
