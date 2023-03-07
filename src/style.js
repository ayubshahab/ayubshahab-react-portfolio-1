const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  sectionHeading:"w-full font-poppins font-semibold text-accent xs:text-[16px] text-[12px] text-white ", 
  sectionSupportText:"w-full font-poppins font-normal text-black xs:text-[16px] text-[12px] text-Black ",

  bulkTextBlack:"w-full font-poppins font-normal xs:text-[16px] text-[12px] text-white ", 
  bulkTextWhite:"w-full font-poppins font-normal xs:text-[16px] text-[12px] text-Black ", 
 
  mediumTextBlack:"w-full font-poppins font-normal xs:text-[14px] text-[12px] text-white ", 
  mediumTextWhite:"w-full font-poppins font-normal xs:text-[14px] text-[12px] text-Black ", 

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  parentPaddingX: "sm:px-[25px] px-[50px]", //the main section paddings
  parentPaddingY: "sm:py-[50px] py-[100px]", //the main section paddings
};

export const layout = {
  // flex md:flex-col flex-row 
  section: `${styles.paddingY} ${styles.parentPaddingX}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
};

export default styles;