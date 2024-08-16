import axios from "axios";

export const fetchCouponKey = async (
  couponText: string,
  setCouponValue: (value: any) => void,
  setDiscountMessage: ({}: any) => void,
  loading: ({}: any) => void
) => {
  loading(true);
  if (!couponText) return;
  try {
    const getCoupon = await axios.get(`/api/coupon/get-one?key=${couponText}`);
    const result = getCoupon?.data;
    const { coupon } = result;

    if (result?.key || result.status == 201) {
      if (!result.valid) {
        setCouponValue(null);
        setDiscountMessage({ type: "error", text: "الرمز غير صالح" });
      }
      setCouponValue(coupon);
    } else if (result.status == 404) {
      setCouponValue(null);
      setDiscountMessage({ type: "error", text: "الرمز غير صالح" });
    } else {
      setCouponValue(null);
      setDiscountMessage({
        type: "error",
        text: "تأكد من اتصالك بالانترنت وحاول مرة اخرى لاحقاً",
      });
    }
  } catch (error) {
    console.error(error);
  }
  loading(false);
};
