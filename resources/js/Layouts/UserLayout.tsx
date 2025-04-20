import Button from '@/Components/Shared/Button';
import {useLaravelReactI18n} from "laravel-react-i18n";



export default function UserLayout({ children }: { children: React.ReactNode }) {

    const { t } = useLaravelReactI18n();

    const profileLink = `${window.location.origin}/profile`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(profileLink).then(() => {
            alert(t('userlayout.copied'));
        }).catch((err) => {
            console.error("Copy error:", err);
        });
    };


    return (
        <>

            <div className="min-h-screen item-center w-[84rem] mx-auto  text-white flex p-6">

                <main className="flex-1 flex flex-col ml-[1.25rem] mr-[1.25rem] ">

                    <div
                        className="flex flex-row  items-center gap-[1.5625rem] px-[2.0625rem] pt-[3.75rem] pb-[1.875rem] w-full h-[9.1rem]  max-w-[56.75rem] border-b border-[#C6C6C6]">

                        <div className="flex flex-row items-center gap-[2.5rem]">
                            <Button
                                className="flex items-center gap-[0.625rem] px-[1.25rem] py-[0.9375rem] w-auto h-[3.5625rem] bg-[rgba(0,204,255,0.5)] rounded-[1.875rem]">
                                  <span
                                      className="text-[1.25rem] font-manrope font-medium leading-[1.6875rem] text-center text-black dark:text-white">
                                                {t('userlayout.in_progress')}

                                  </span>
                            </Button>
                        </div>

                        <div className="flex flex-row items-center gap-[2.5rem] ">
                            <Button
                                className="flex items-center gap-[0.625rem] px-[1.25rem] py-[0.9375rem] w-auto h-[3.5625rem] bg-[rgba(167,167,167,0.2)] dark:bg-[   rounded-[1.875rem]">
                                  <span
                                      className="text-[1.25rem] font-manrope font-medium leading-[1.6875rem] text-center text-black dark:text-white">
                                    {t('userlayout.new_task')}
                                  </span>
                            </Button>
                        </div>

                        <div className="flex flex-row items-center gap-[2.5rem] ">
                            <Button
                                className="flex items-center gap-[0.625rem] px-[1.25rem] py-[0.9375rem] w-auto h-[3.5625rem] bg-[rgba(167,167,167,0.2)] rounded-[1.875rem]">
                                  <span
                                      className="text-[1.25rem] font-manrope font-medium leading-[1.6875rem] text-center text-black dark:text-white">
                                   {t('userlayout.favourite_specialists')}
                                  </span>
                            </Button>
                        </div>

                        <div className="flex flex-row items-center gap-[2.5rem]">
                            <Button
                                className="flex items-center gap-[0.625rem] px-[1.25rem] py-[0.9375rem] w-auto h-[3.5625rem] bg-[rgba(167,167,167,0.2)] rounded-[1.875rem]">
                                  <span
                                      className="text-[1.25rem] font-manrope font-medium leading-[1.6875rem] text-center text-black dark:text-white">
                                    {t('userlayout.search_orders')}
                                  </span>
                            </Button>
                        </div>

                    </div>


                    <div className="flex-1">{children}</div>
                </main>

                <div className="w-[27rem]  border-l border-[#C6C6C6] flex flex-col">


                    <div
                        className="flex flex-col items-start px-[3.125rem] py-[1.875rem] ml-[1.25rem] mr-[1.25rem] gap-[0.625rem] h-[9.1rem]  border-b border-[#C6C6C6] pt-[3.75rem]">

                        <div className="flex flex-row items-center gap-[50px] w-[322px] h-[61px] ">
                            <div className="flex flex-col items-start gap-[5px] w-[110px] h-[61px] pb-[1.875rem]">
                                <div
                                    className="w-[130px] h-[29px] text-[40px] leading-[55px] font-medium text-black dark:text-white flex items-center">
                                    12456
                                </div>
                                <div
                                    className="w-[154px] h-[27px] text-[20px] leading-[27px] font-medium text-[#00CCFF] flex items-center">
                                    {t('userlayout.reviews')}
                                </div>
                            </div>

                            <div className="w-px h-[2.875rem] border-l border-[#00CCFF]"></div>

                            <div className="flex flex-col items-start gap-[5px] w-[112px] h-[61px]">
                                <div
                                    className="w-[110px] h-[29px] text-[40px] leading-[55px] font-medium text-black dark:text-white flex items-center">
                                    100%
                                </div>
                                <div
                                    className="w-[9.625rem] h-[1.688rem] text-[20px] leading-[27px] font-medium text-[#929292] dark:text[#A7A7A7] flex items-center">
                                    {t('userlayout.positive')}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col items-start px-[3.125rem] py-[1.875rem] ml-[1.25rem] mr-[1.25rem] gap-[0.625rem]  border-b border-[#C6C6C6]">

                        <div className="flex items-start gap-[10px]  h-[44px]">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9047 2.29169H22.0954C23.7436 2.29169 25.1167 2.29169 26.2057 2.43835C27.3571 2.59235 28.3966 2.93335 29.2307 3.76752C30.0667 4.60352 30.4077 5.64302 30.5617 6.79252C30.6717 7.59919 30.6992 8.55985 30.7066 9.67085C31.8946 9.70935 32.9542 9.78085 33.8966 9.90552C36.0452 10.1952 37.7851 10.8039 39.1582 12.1752C40.5296 13.5484 41.1382 15.2882 41.4279 17.4369C41.7084 19.5269 41.7084 22.1944 41.7084 25.564V25.7694C41.7084 29.139 41.7084 31.8084 41.4279 33.8965C41.1382 36.0452 40.5296 37.785 39.1582 39.1582C37.7851 40.5295 36.0452 41.1382 33.8966 41.4279C31.8066 41.7084 29.1391 41.7084 25.7694 41.7084H18.2307C14.8611 41.7084 12.1917 41.7084 10.1036 41.4279C7.95491 41.1382 6.21508 40.5295 4.84191 39.1582C3.47058 37.785 2.86191 36.0452 2.57225 33.8965C2.29175 31.8065 2.29175 29.139 2.29175 25.7694V25.564C2.29175 22.1944 2.29175 19.525 2.57225 17.4369C2.86191 15.2882 3.47058 13.5484 4.84191 12.1752C6.21508 10.8039 7.95491 10.1952 10.1036 9.90552C11.1625 9.77578 12.2271 9.69747 13.2936 9.67085C13.3009 8.55985 13.3302 7.59919 13.4384 6.79252C13.5924 5.64302 13.9334 4.60352 14.7676 3.76752C15.6036 2.93335 16.6431 2.59419 17.7926 2.43835C18.8834 2.29169 20.2584 2.29169 21.9047 2.29169ZM16.0454 9.62869C16.7384 9.62502 17.4669 9.6238 18.2307 9.62502H25.7694C26.5333 9.62502 27.2617 9.62624 27.9547 9.62869C27.9474 8.58369 27.9217 7.79535 27.8374 7.15919C27.7219 6.31402 27.5257 5.95102 27.2874 5.71269C27.0491 5.47435 26.6861 5.27819 25.8391 5.16269C24.9554 5.04535 23.7674 5.04169 22.0001 5.04169C20.2327 5.04169 19.0447 5.04535 18.1592 5.16452C17.3141 5.27819 16.9511 5.47435 16.7127 5.71452C16.4744 5.95469 16.2782 6.31402 16.1627 7.15919C16.0784 7.79352 16.0527 8.58185 16.0454 9.62869ZM10.4684 12.6317C8.62408 12.8792 7.56075 13.3449 6.78341 14.1204C6.00975 14.8959 5.54408 15.9592 5.29658 17.8035C5.04358 19.6864 5.03991 22.1705 5.03991 25.6667C5.03991 29.1629 5.04358 31.647 5.29658 33.5317C5.54408 35.3742 6.00975 36.4375 6.78525 37.213C7.56075 37.9885 8.62408 38.4542 10.4684 38.7017C12.3531 38.9547 14.8354 38.9584 18.3316 38.9584H25.6649C29.1611 38.9584 31.6452 38.9547 33.5299 38.7017C35.3724 38.4542 36.4357 37.9885 37.2112 37.213C37.9867 36.4375 38.4524 35.3742 38.6999 33.5299C38.9529 31.647 38.9566 29.1629 38.9566 25.6667C38.9566 22.1705 38.9529 19.6882 38.6999 17.8017C38.4524 15.9592 37.9867 14.8959 37.2112 14.1204C36.4357 13.3449 35.3724 12.8792 33.5281 12.6317C31.6452 12.3787 29.1611 12.375 25.6649 12.375H18.3316C14.8354 12.375 12.3549 12.3787 10.4684 12.6317ZM22.0001 16.9584C22.3648 16.9584 22.7145 17.1032 22.9724 17.3611C23.2302 17.6189 23.3751 17.9687 23.3751 18.3334V18.3517C25.3716 18.854 27.0417 20.4289 27.0417 22.6105C27.0417 22.9752 26.8969 23.3249 26.639 23.5828C26.3812 23.8407 26.0314 23.9855 25.6667 23.9855C25.3021 23.9855 24.9523 23.8407 24.6945 23.5828C24.4366 23.3249 24.2917 22.9752 24.2917 22.6105C24.2917 21.9065 23.5107 20.9312 22.0001 20.9312C20.4894 20.9312 19.7084 21.9065 19.7084 22.6105C19.7084 23.3145 20.4894 24.2917 22.0001 24.2917C24.5392 24.2917 27.0417 26.0517 27.0417 28.7229C27.0417 30.9045 25.3716 32.4775 23.3751 32.9817V33C23.3751 33.3647 23.2302 33.7144 22.9724 33.9723C22.7145 34.2302 22.3648 34.375 22.0001 34.375C21.6354 34.375 21.2857 34.2302 21.0278 33.9723C20.7699 33.7144 20.6251 33.3647 20.6251 33V32.9817C18.6286 32.4794 16.9584 30.9045 16.9584 28.7229C16.9584 28.3582 17.1033 28.0084 17.3611 27.7506C17.619 27.4927 17.9687 27.3479 18.3334 27.3479C18.6981 27.3479 19.0478 27.4927 19.3057 27.7506C19.5635 28.0084 19.7084 28.3582 19.7084 28.7229C19.7084 29.4269 20.4894 30.4022 22.0001 30.4022C23.5107 30.4022 24.2917 29.4269 24.2917 28.7229C24.2917 28.0189 23.5107 27.0417 22.0001 27.0417C19.4609 27.0417 16.9584 25.2817 16.9584 22.6105C16.9584 20.4289 18.6286 18.854 20.6251 18.3517V18.3334C20.6251 17.9687 20.7699 17.6189 21.0278 17.3611C21.2857 17.1032 21.6354 16.9584 22.0001 16.9584Z" fill="#00CCFF"/>
                            </svg>
                            <div className="text-[32px] leading-[44px] font-medium text-black dark:text-white">{t('userlayout.my_balance')}</div>
                        </div>


                        <div className="flex gap-[3.125rem]  h-[1.5rem]">
                            <div className="text-[18px] leading-[25px] font-medium text-[#929292] dark:text[#A7A7A7]">{t('userlayout.specialist')}</div>
                            <div className="text-[18px] leading-[25px] font-medium text-[#929292] dark:text[#A7A7A7]">{t('userlayout.customer')}</div>
                        </div>


                        <div className="flex gap-[2.75]  h-[1.5rem]">
                            <div className="text-[18px] leading-[25px] font-medium text-black dark:text-white">1000 грн</div>
                            <div className="text-[18px] leading-[25px] font-medium text-black dark:text-white">1000 грн</div>
                        </div>


                        <div className="flex items-center gap-[0.625rem]  h-[1.5rem]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 7H15M9 11H15M13 15H15M5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21L16 19L14 21L12 19L10 21L8 19L5 21Z" stroke="#00CCFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="text-[16px] leading-[22px] font-medium text-[#00CCFF]">{t('userlayout.extracts')}</div>
                        </div>


                        <div className="flex items-center gap-[0.625rem] h-[1.5rem]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.94412 3.25H14.0561C15.8941 3.25 17.3501 3.25 18.4891 3.403C19.6611 3.561 20.6101 3.893 21.3591 4.641C22.1071 5.39 22.4391 6.339 22.5971 7.511C22.6871 8.184 22.7241 8.967 22.7391 9.874C22.7515 9.95007 22.7529 10.0275 22.7431 10.104C22.7491 10.6693 22.7515 11.2827 22.7501 11.944V12.056C22.7501 13.894 22.7501 15.35 22.5971 16.489C22.4391 17.661 22.1071 18.61 21.3591 19.359C20.6101 20.107 19.6611 20.439 18.4891 20.597C17.3491 20.75 15.8941 20.75 14.0561 20.75H9.94412C8.10612 20.75 6.65012 20.75 5.51112 20.597C4.33912 20.439 3.39012 20.107 2.64112 19.359C1.89312 18.61 1.56112 17.661 1.40312 16.489C1.25012 15.349 1.25012 13.894 1.25012 12.056V11.944C1.24879 11.2827 1.25112 10.6693 1.25712 10.104C1.24703 10.0276 1.24805 9.95012 1.26012 9.874C1.27612 8.967 1.31312 8.184 1.40312 7.511C1.56112 6.339 1.89312 5.39 2.64112 4.641C3.39012 3.893 4.33912 3.561 5.51112 3.403C6.65112 3.25 8.10612 3.25 9.94412 3.25ZM2.75212 10.75C2.75079 11.138 2.75012 11.5547 2.75012 12C2.75012 13.907 2.75212 15.262 2.89012 16.29C3.02512 17.295 3.27912 17.875 3.70212 18.298C4.12512 18.721 4.70512 18.975 5.71112 19.11C6.73912 19.248 8.09312 19.25 10.0001 19.25H14.0001C15.9071 19.25 17.2621 19.248 18.2901 19.11C19.2951 18.975 19.8751 18.721 20.2981 18.298C20.7211 17.875 20.9751 17.295 21.1101 16.289C21.2481 15.261 21.2501 13.907 21.2501 12C21.2501 11.5547 21.2495 11.138 21.2481 10.75H2.75212ZM21.2241 9.25H2.77612C2.79612 8.663 2.83012 8.156 2.89012 7.71C3.02512 6.705 3.27912 6.125 3.70212 5.702C4.12512 5.279 4.70512 5.025 5.71112 4.89C6.73912 4.752 8.09312 4.75 10.0001 4.75H14.0001C15.9071 4.75 17.2621 4.752 18.2901 4.89C19.2951 5.025 19.8751 5.279 20.2981 5.702C20.7211 6.125 20.9751 6.705 21.1101 7.711C21.1701 8.156 21.2041 8.663 21.2241 9.25ZM5.25012 16C5.25012 15.8011 5.32914 15.6103 5.46979 15.4697C5.61044 15.329 5.80121 15.25 6.00012 15.25H10.0001C10.199 15.25 10.3898 15.329 10.5304 15.4697C10.6711 15.6103 10.7501 15.8011 10.7501 16C10.7501 16.1989 10.6711 16.3897 10.5304 16.5303C10.3898 16.671 10.199 16.75 10.0001 16.75H6.00012C5.80121 16.75 5.61044 16.671 5.46979 16.5303C5.32914 16.3897 5.25012 16.1989 5.25012 16ZM11.7501 16C11.7501 15.8011 11.8291 15.6103 11.9698 15.4697C12.1104 15.329 12.3012 15.25 12.5001 15.25H14.0001C14.199 15.25 14.3898 15.329 14.5304 15.4697C14.6711 15.6103 14.7501 15.8011 14.7501 16C14.7501 16.1989 14.6711 16.3897 14.5304 16.5303C14.3898 16.671 14.199 16.75 14.0001 16.75H12.5001C12.3012 16.75 12.1104 16.671 11.9698 16.5303C11.8291 16.3897 11.7501 16.1989 11.7501 16Z" fill="#00CCFF"/>
                            </svg>
                            <div className="text-[16px] leading-[22px] font-medium text-[#00CCFF]">
                                {t('userlayout.withdrawal')}
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-col items-start px-[3.125rem] py-[1.875rem] ml-[1.25rem] mr-[1.25rem] gap-[0.625rem]  border-b border-[#C6C6C6]  ">

                        <div className="flex items-start gap-[0.625rem] w-[20.4375rem] h-[2.75rem]">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.5833 11.9167L17.4167 18.3333M26.5833 32.0833L17.4167 25.6667M17.4167 22C17.4167 23.2156 16.9338 24.3814 16.0742 25.2409C15.2147 26.1004 14.0489 26.5833 12.8333 26.5833C11.6178 26.5833 10.452 26.1004 9.59243 25.2409C8.73289 24.3814 8.25 23.2156 8.25 22C8.25 20.7844 8.73289 19.6186 9.59243 18.7591C10.452 17.8996 11.6178 17.4167 12.8333 17.4167C14.0489 17.4167 15.2147 17.8996 16.0742 18.7591C16.9338 19.6186 17.4167 20.7844 17.4167 22ZM35.75 33.9167C35.75 35.1322 35.2671 36.298 34.4076 37.1576C33.548 38.0171 32.3822 38.5 31.1667 38.5C29.9511 38.5 28.7853 38.0171 27.9258 37.1576C27.0662 36.298 26.5833 35.1322 26.5833 33.9167C26.5833 32.7011 27.0662 31.5353 27.9258 30.6758C28.7853 29.8162 29.9511 29.3333 31.1667 29.3333C32.3822 29.3333 33.548 29.8162 34.4076 30.6758C35.2671 31.5353 35.75 32.7011 35.75 33.9167ZM35.75 10.0833C35.75 11.2989 35.2671 12.4647 34.4076 13.3242C33.548 14.1838 32.3822 14.6667 31.1667 14.6667C29.9511 14.6667 28.7853 14.1838 27.9258 13.3242C27.0662 12.4647 26.5833 11.2989 26.5833 10.0833C26.5833 8.86776 27.0662 7.70197 27.9258 6.84243C28.7853 5.98289 29.9511 5.5 31.1667 5.5C32.3822 5.5 33.548 5.98289 34.4076 6.84243C35.2671 7.70197 35.75 8.86776 35.75 10.0833Z" stroke="#00CCFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="text-[2rem] leading-[2.75rem] font-medium text-black dark:text-white text-nowrap">
                                {t('userlayout.invite_friends')}
                            </div>
                        </div>


                        <div className="flex gap-[3.125rem] w-[20.125rem] h-[3.5625rem]">
                            <div className="text-[0.875rem] leading-[1.1875rem] font-medium text-[#929292] dark:text-[#A7A7A7] flex items-center">
                                {t('userlayout.invite_friends_text')}
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-col items-start px-[3.125rem] py-[1.875rem] ml-[1.25rem] mr-[1.25rem] gap-[0.625rem] w-[26.375rem]">

                        <div className="flex items-start gap-[0.625rem] w-[14.5rem] h-[4.75rem]">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.33325 33.0001C7.33325 31.0552 8.10587 29.1899 9.48114 27.8146C10.8564 26.4394 12.7217 25.6667 14.6666 25.6667H29.3333C31.2782 25.6667 33.1434 26.4394 34.5187 27.8146C35.894 29.1899 36.6666 31.0552 36.6666 33.0001C36.6666 33.9725 36.2803 34.9052 35.5926 35.5928C34.905 36.2804 33.9724 36.6667 32.9999 36.6667H10.9999C10.0275 36.6667 9.09483 36.2804 8.40719 35.5928C7.71956 34.9052 7.33325 33.9725 7.33325 33.0001Z" stroke="#00CCFF" stroke-width="3" stroke-linejoin="round"/>
                                <path d="M22 18.3334C25.0376 18.3334 27.5 15.8709 27.5 12.8334C27.5 9.79581 25.0376 7.33337 22 7.33337C18.9624 7.33337 16.5 9.79581 16.5 12.8334C16.5 15.8709 18.9624 18.3334 22 18.3334Z" stroke="#00CCFF" stroke-width="3"/>
                            </svg>
                            <div className="text-[2rem] leading-[120%] font-medium text-black dark:text-white flex items-center w-[11.125rem] h-[4.75rem]">
                                {t('userlayout.profile_link')}
                            </div>
                        </div>

                        <div className="flex gap-[3.125rem] w-[17.9375rem] h-[4.75rem]">
                            <div className="text-[0.875rem] leading-[1.1875rem] font-medium text-[#929292] dark:text-[#A7A7A7] flex items-center">
                                {t('userlayout.profile_link_text')}
                            </div>
                        </div>

                        <Button className="w-[18.375rem] h-[2.5rem] border border-[#929292] dark:border-[#A7A7A7] bg-[#] rounded-full flex items-center px-[1rem]"
                             onClick={handleCopyLink}>
                            <div className="text-[0.875rem] leading-[1.1875rem] text-[#A7A7A7]/50">
                                {profileLink}
                            </div>
                        </Button>


                        <div className="flex gap-[3.125rem] w-[20.75rem] h-[1.1875rem]">
                            <div className="text-[0.875rem] leading-[1.1875rem] font-medium text-[#929292] dark:text-[#A7A7A7] flex items-center">
                                {t('userlayout.copy_link')}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
