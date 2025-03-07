import type { IconProps } from "@/types/icon-props";

export function SearchIcon(props: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
      {...props}
    >
      <g clipPath="url(#clip0_1699_11536)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.625 2.0625C5.00063 2.0625 2.0625 5.00063 2.0625 8.625C2.0625 12.2494 5.00063 15.1875 8.625 15.1875C12.2494 15.1875 15.1875 12.2494 15.1875 8.625C15.1875 5.00063 12.2494 2.0625 8.625 2.0625ZM0.9375 8.625C0.9375 4.37931 4.37931 0.9375 8.625 0.9375C12.8707 0.9375 16.3125 4.37931 16.3125 8.625C16.3125 10.5454 15.6083 12.3013 14.4441 13.6487L16.8977 16.1023C17.1174 16.3219 17.1174 16.6781 16.8977 16.8977C16.6781 17.1174 16.3219 17.1174 16.1023 16.8977L13.6487 14.4441C12.3013 15.6083 10.5454 16.3125 8.625 16.3125C4.37931 16.3125 0.9375 12.8707 0.9375 8.625Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_1699_11536">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12.998 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95 1.414-1.414 4.95 4.95z" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
      {...props}
    >
      <path
        d="M15.7492 8.38125H3.73984L8.52109 3.51562C8.77422 3.2625 8.77422 2.86875 8.52109 2.61562C8.26797 2.3625 7.87422 2.3625 7.62109 2.61562L1.79922 8.52187C1.54609 8.775 1.54609 9.16875 1.79922 9.42188L7.62109 15.3281C7.73359 15.4406 7.90234 15.525 8.07109 15.525C8.23984 15.525 8.38047 15.4687 8.52109 15.3562C8.77422 15.1031 8.77422 14.7094 8.52109 14.4563L3.76797 9.64687H15.7492C16.0867 9.64687 16.368 9.36562 16.368 9.02812C16.368 8.6625 16.0867 8.38125 15.7492 8.38125Z"
        fill=""
      />
    </svg>
  );
}

export function ChevronUpIcon(props: IconProps) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.551 7.728a.687.687 0 01.895 0l6.417 5.5a.687.687 0 11-.895 1.044l-5.97-5.117-5.969 5.117a.687.687 0 01-.894-1.044l6.416-5.5z"
      />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="currentColor"
      {...props}
    >
      <path d="M4.357 2.393L.91 5.745 0 4.861 5 0l5 4.861-.909.884-3.448-3.353V10H4.357V2.393z" />
    </svg>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="currentColor"
      {...props}
    >
      <path d="M5.643 7.607L9.09 4.255l.909.884L5 10 0 5.139l.909-.884 3.448 3.353V0h1.286v7.607z" />
    </svg>
  );
}

export function DotIcon(props: IconProps) {
  return (
    <svg width={2} height={3} viewBox="0 0 2 3" fill="currentColor" {...props}>
      <circle cx={1} cy={1.5} r={1} fill="#637381" />
    </svg>
  );
}

export function KebabMenuIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_429_11122)">
        <rect x="12" y="12" width="0.01" height="0.01" stroke="#292929" strokeWidth="3.75" strokeLinejoin="round"/>
        <rect x="12" y="5" width="0.01" height="0.01" stroke="#292929" strokeWidth="3.75" strokeLinejoin="round"/>
        <rect x="12" y="19" width="0.01" height="0.01" stroke="#292929" strokeWidth="3.75" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_429_11122">
          <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export function LeafIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="green"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c4.5 0 8.31-2.99 9.58-7.08.15-.5-.24-.92-.76-.92h-1.1c-.37 0-.68.26-.76.63C17.83 17.16 15.13 19 12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7c2.76 0 5.26 1.61 6.43 4.07.19.42.73.56 1.09.3l.9-.66c.34-.25.45-.72.25-1.09C18.83 4.68 15.61 2 12 2z"
      />
    </svg>
  );
}

export function TrendingUpIcon(props: IconProps) {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="currentColor"
      {...props}
    >
      <path
        d="M13.0158 5.24707H9.4939C9.2314 5.24707 9.01265 5.46582 9.01265 5.72832C9.01265 5.99082 9.2314 6.20957 9.4939 6.20957H11.6595L8.85953 8.09082C8.75015 8.17832 8.59703 8.17832 8.46578 8.09082L5.57828 6.1877C5.1189 5.88145 4.55015 5.88145 4.09078 6.1877L0.722027 8.44082C0.503277 8.59395 0.437652 8.9002 0.590777 9.11895C0.678277 9.2502 0.831402 9.3377 1.0064 9.3377C1.0939 9.3377 1.20328 9.31582 1.2689 9.2502L4.65953 6.99707C4.7689 6.90957 4.92203 6.90957 5.05328 6.99707L7.94078 8.92207C8.40015 9.22832 8.9689 9.22832 9.42828 8.92207L12.5127 6.84395V9.27207C12.5127 9.53457 12.7314 9.75332 12.9939 9.75332C13.2564 9.75332 13.4752 9.53457 13.4752 9.27207V5.72832C13.5189 5.46582 13.2783 5.24707 13.0158 5.24707Z"
        fill=""
      />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg
      width="11"
      height="8"
      viewBox="0 0 11 8"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2355 0.812752L10.2452 0.824547C10.4585 1.08224 10.4617 1.48728 10.1855 1.74621L4.85633 7.09869C4.66442 7.29617 4.41535 7.4001 4.14693 7.4001C3.89823 7.4001 3.63296 7.29979 3.43735 7.09851L0.788615 4.43129C0.536589 4.1703 0.536617 3.758 0.788643 3.49701C1.04747 3.22897 1.4675 3.22816 1.72731 3.49457L4.16182 5.94608L9.28643 0.799032C9.54626 0.532887 9.96609 0.533789 10.2248 0.801737L10.2355 0.812752Z"
        fill=""
      />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="currentColor"
      {...props}
    >
      <g clipPath="url(#clip0_803_2686)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.23529 2.29669C0.942402 2.00379 0.942402 1.52892 1.23529 1.23603C1.52819 0.943134 2.00306 0.943134 2.29596 1.23603L5.37433 4.3144L8.45261 1.23612C8.7455 0.943225 9.22038 0.943225 9.51327 1.23612C9.80616 1.52901 9.80616 2.00389 9.51327 2.29678L6.43499 5.37506L9.51327 8.45334C9.80616 8.74624 9.80616 9.22111 9.51327 9.514C9.22038 9.8069 8.7455 9.8069 8.45261 9.514L5.37433 6.43572L2.29596 9.51409C2.00306 9.80699 1.52819 9.80699 1.23529 9.51409C0.942402 9.2212 0.942402 8.74633 1.23529 8.45343L4.31367 5.37506L1.23529 2.29669Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_803_2686">
          <rect width="10.75" height="10.75" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <g clipPath="url(#clip0_1680_14985)">
        <path
          d="M9.99935 18.3334C5.39697 18.3334 1.66602 14.6024 1.66602 10.0001C1.66602 5.39771 5.39697 1.66675 9.99935 1.66675C14.6017 1.66675 18.3327 5.39771 18.3327 10.0001C18.3327 14.6024 14.6017 18.3334 9.99935 18.3334ZM8.09103 16.3896C7.28887 14.6883 6.79712 12.8119 6.68877 10.8334H3.38426C3.71435 13.4805 5.59634 15.6457 8.09103 16.3896ZM8.35827 10.8334C8.4836 12.8657 9.06418 14.7748 9.99935 16.4601C10.9345 14.7748 11.5151 12.8657 11.6404 10.8334H8.35827ZM16.6144 10.8334H13.3099C13.2016 12.8119 12.7098 14.6883 11.9077 16.3896C14.4023 15.6457 16.2844 13.4805 16.6144 10.8334ZM3.38426 9.16675H6.68877C6.79712 7.18822 7.28887 5.31181 8.09103 3.61055C5.59634 4.35452 3.71435 6.51966 3.38426 9.16675ZM8.35827 9.16675H11.6404C11.5151 7.13443 10.9345 5.22529 9.99935 3.54007C9.06418 5.22529 8.4836 7.13443 8.35827 9.16675ZM11.9077 3.61055C12.7098 5.31181 13.2016 7.18822 13.3099 9.16675H16.6144C16.2844 6.51966 14.4023 4.35452 11.9077 3.61055Z"
          fill="#6B7280"
        />
      </g>
      <defs>
        <clipPath id="clip0_1680_14985">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function TrashIcon(props: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.73202 1.68751H10.2681C10.4304 1.68741 10.5718 1.68732 10.7053 1.70864C11.2328 1.79287 11.6892 2.12186 11.9359 2.59563C11.9984 2.71555 12.043 2.84971 12.0942 3.00371L12.1779 3.25488C12.1921 3.2974 12.1962 3.30943 12.1996 3.31891C12.3309 3.682 12.6715 3.92745 13.0575 3.93723C13.0676 3.93748 13.08 3.93753 13.1251 3.93753H15.3751C15.6857 3.93753 15.9376 4.18937 15.9376 4.50003C15.9376 4.81069 15.6857 5.06253 15.3751 5.06253H2.625C2.31434 5.06253 2.0625 4.81069 2.0625 4.50003C2.0625 4.18937 2.31434 3.93753 2.625 3.93753H4.87506C4.9201 3.93753 4.93253 3.93749 4.94267 3.93723C5.32866 3.92745 5.66918 3.68202 5.80052 3.31893C5.80397 3.30938 5.80794 3.29761 5.82218 3.25488L5.90589 3.00372C5.95711 2.84973 6.00174 2.71555 6.06419 2.59563C6.3109 2.12186 6.76735 1.79287 7.29482 1.70864C7.42834 1.68732 7.56973 1.68741 7.73202 1.68751ZM6.75611 3.93753C6.79475 3.86176 6.82898 3.78303 6.85843 3.70161C6.86737 3.67689 6.87615 3.65057 6.88742 3.61675L6.96227 3.39219C7.03065 3.18706 7.04639 3.14522 7.06201 3.11523C7.14424 2.95731 7.29639 2.84764 7.47222 2.81957C7.50561 2.81423 7.55027 2.81253 7.76651 2.81253H10.2336C10.4499 2.81253 10.4945 2.81423 10.5279 2.81957C10.7037 2.84764 10.8559 2.95731 10.9381 3.11523C10.9537 3.14522 10.9695 3.18705 11.0379 3.39219L11.1127 3.61662L11.1417 3.70163C11.1712 3.78304 11.2054 3.86177 11.244 3.93753H6.75611Z"
        fill=""
      />
      <path
        d="M4.43632 6.33761C4.41565 6.02764 4.14762 5.79311 3.83765 5.81377C3.52767 5.83444 3.29314 6.10247 3.31381 6.41245L3.6614 11.6262C3.72552 12.5883 3.77731 13.3654 3.89879 13.9752C4.02509 14.6092 4.23991 15.1387 4.6836 15.5538C5.1273 15.9689 5.66996 16.1481 6.31095 16.2319C6.92747 16.3126 7.70628 16.3125 8.67045 16.3125H9.32963C10.2938 16.3125 11.0727 16.3126 11.6892 16.2319C12.3302 16.1481 12.8728 15.9689 13.3165 15.5538C13.7602 15.1387 13.975 14.6092 14.1013 13.9752C14.2228 13.3654 14.2746 12.5883 14.3387 11.6263L14.6863 6.41245C14.707 6.10247 14.4725 5.83444 14.1625 5.81377C13.8525 5.79311 13.5845 6.02764 13.5638 6.33761L13.2189 11.5119C13.1515 12.5228 13.1034 13.2262 12.998 13.7554C12.8958 14.2688 12.753 14.5405 12.5479 14.7323C12.3429 14.9242 12.0623 15.0485 11.5433 15.1164C11.0082 15.1864 10.3032 15.1875 9.29007 15.1875H8.71005C7.69692 15.1875 6.99192 15.1864 6.45686 15.1164C5.93786 15.0485 5.65724 14.9242 5.45218 14.7323C5.24712 14.5405 5.10438 14.2687 5.00211 13.7554C4.89669 13.2262 4.84867 12.5228 4.78127 11.5119L4.43632 6.33761Z"
        fill=""
      />
      <path
        d="M7.0691 7.69032C7.37822 7.65941 7.65387 7.88494 7.68478 8.19406L8.05978 11.9441C8.09069 12.2532 7.86516 12.5288 7.55604 12.5597C7.24692 12.5906 6.97127 12.3651 6.94036 12.056L6.56536 8.306C6.53445 7.99688 6.75998 7.72123 7.0691 7.69032Z"
        fill=""
      />
      <path
        d="M10.931 7.69032C11.2402 7.72123 11.4657 7.99688 11.4348 8.306L11.0598 12.056C11.0289 12.3651 10.7532 12.5906 10.4441 12.5597C10.135 12.5288 9.90945 12.2532 9.94036 11.9441L10.3154 8.19406C10.3463 7.88494 10.6219 7.65941 10.931 7.69032Z"
        fill=""
      />
    </svg>
  );
}

export function MessageOutlineIcon(props: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9987 2.521C6.31578 2.521 2.51953 6.31725 2.51953 11.0002C2.51953 12.3578 2.8381 13.6391 3.40393 14.7751C3.63103 15.231 3.71848 15.7762 3.57519 16.3118L3.02922 18.3523C2.92895 18.7271 3.2718 19.0699 3.64657 18.9696L5.6871 18.4237C6.22262 18.2804 6.76783 18.3678 7.22378 18.5949C8.3598 19.1608 9.64106 19.4793 10.9987 19.4793C15.6816 19.4793 19.4779 15.6831 19.4779 11.0002C19.4779 6.31725 15.6816 2.521 10.9987 2.521ZM1.14453 11.0002C1.14453 5.55786 5.55639 1.146 10.9987 1.146C16.441 1.146 20.8529 5.55786 20.8529 11.0002C20.8529 16.4425 16.441 20.8543 10.9987 20.8543C9.42358 20.8543 7.93293 20.4843 6.61075 19.8257C6.41345 19.7274 6.21199 19.7066 6.0425 19.7519L4.00197 20.2979C2.60512 20.6717 1.3272 19.3937 1.70094 17.9969L2.24692 15.9564C2.29227 15.7869 2.27142 15.5854 2.17315 15.3881C1.5146 14.0659 1.14453 12.5753 1.14453 11.0002ZM14.2348 8.68069C14.5033 8.94918 14.5033 9.38448 14.2348 9.65296L10.5682 13.3196C10.3035 13.5843 9.87588 13.5886 9.60592 13.3294L7.77258 11.5694C7.49867 11.3065 7.48979 10.8713 7.75274 10.5974C8.0157 10.3235 8.45091 10.3146 8.72481 10.5775L10.0722 11.871L13.2626 8.68069C13.531 8.41221 13.9663 8.41221 14.2348 8.68069Z"
        fill=""
      />
    </svg>
  );
}

export function EmailIcon(props: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.11756 2.979H12.8877C14.5723 2.97899 15.9066 2.97898 16.9509 3.11938C18.0256 3.26387 18.8955 3.56831 19.5815 4.25431C20.2675 4.94031 20.5719 5.81018 20.7164 6.8849C20.8568 7.92918 20.8568 9.26351 20.8568 10.9481V11.0515C20.8568 12.7362 20.8568 14.0705 20.7164 15.1148C20.5719 16.1895 20.2675 17.0594 19.5815 17.7454C18.8955 18.4314 18.0256 18.7358 16.9509 18.8803C15.9066 19.0207 14.5723 19.0207 12.8876 19.0207H9.11756C7.43295 19.0207 6.09861 19.0207 5.05433 18.8803C3.97961 18.7358 3.10974 18.4314 2.42374 17.7454C1.73774 17.0594 1.4333 16.1895 1.28881 15.1148C1.14841 14.0705 1.14842 12.7362 1.14844 11.0516V10.9481C1.14842 9.26351 1.14841 7.92918 1.28881 6.8849C1.4333 5.81018 1.73774 4.94031 2.42374 4.25431C3.10974 3.56831 3.97961 3.26387 5.05433 3.11938C6.09861 2.97898 7.43294 2.97899 9.11756 2.979ZM5.23755 4.48212C4.3153 4.60611 3.78396 4.83864 3.39602 5.22658C3.00807 5.61452 2.77554 6.14587 2.65155 7.06812C2.5249 8.01014 2.52344 9.25192 2.52344 10.9998C2.52344 12.7478 2.5249 13.9895 2.65155 14.9316C2.77554 15.8538 3.00807 16.3852 3.39602 16.7731C3.78396 17.161 4.3153 17.3936 5.23755 17.5176C6.17957 17.6442 7.42135 17.6457 9.16927 17.6457H12.8359C14.5839 17.6457 15.8256 17.6442 16.7677 17.5176C17.6899 17.3936 18.2213 17.161 18.6092 16.7731C18.9971 16.3852 19.2297 15.8538 19.3537 14.9316C19.4803 13.9895 19.4818 12.7478 19.4818 10.9998C19.4818 9.25192 19.4803 8.01014 19.3537 7.06812C19.2297 6.14587 18.9971 5.61452 18.6092 5.22658C18.2213 4.83864 17.6899 4.60611 16.7677 4.48212C15.8256 4.35546 14.5839 4.354 12.8359 4.354H9.16927C7.42135 4.354 6.17958 4.35546 5.23755 4.48212ZM4.97445 6.89304C5.21753 6.60135 5.65104 6.56194 5.94273 6.80502L7.92172 8.45418C8.77693 9.16685 9.37069 9.66005 9.87197 9.98246C10.3572 10.2945 10.6863 10.3993 11.0026 10.3993C11.3189 10.3993 11.648 10.2945 12.1332 9.98246C12.6345 9.66005 13.2283 9.16685 14.0835 8.45417L16.0625 6.80502C16.3542 6.56194 16.7877 6.60135 17.0308 6.89304C17.2738 7.18473 17.2344 7.61825 16.9427 7.86132L14.9293 9.5392C14.1168 10.2163 13.4582 10.7651 12.877 11.1389C12.2716 11.5283 11.6819 11.7743 11.0026 11.7743C10.3233 11.7743 9.73364 11.5283 9.12818 11.1389C8.54696 10.7651 7.88843 10.2163 7.07594 9.5392L5.06248 7.86132C4.77079 7.61825 4.73138 7.18473 4.97445 6.89304Z"
        fill=""
      />
    </svg>
  );
}

export function PasswordIcon(props: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.48177 14.6668C8.48177 13.2746 9.61039 12.146 11.0026 12.146C12.3948 12.146 13.5234 13.2746 13.5234 14.6668C13.5234 16.059 12.3948 17.1877 11.0026 17.1877C9.61039 17.1877 8.48177 16.059 8.48177 14.6668ZM11.0026 13.521C10.3698 13.521 9.85677 14.034 9.85677 14.6668C9.85677 15.2997 10.3698 15.8127 11.0026 15.8127C11.6354 15.8127 12.1484 15.2997 12.1484 14.6668C12.1484 14.034 11.6354 13.521 11.0026 13.521Z"
        fill=""
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.19011 7.3335C6.19011 4.67563 8.34474 2.521 11.0026 2.521C13.2441 2.521 15.1293 4.05405 15.6635 6.12986C15.7582 6.49757 16.133 6.71894 16.5007 6.6243C16.8684 6.52965 17.0898 6.15484 16.9951 5.78713C16.3083 3.11857 13.8867 1.146 11.0026 1.146C7.58534 1.146 4.81511 3.91623 4.81511 7.3335V8.5277C4.60718 8.54232 4.4112 8.56135 4.22683 8.58614C3.40173 8.69707 2.70702 8.93439 2.15526 9.48615C1.6035 10.0379 1.36618 10.7326 1.25525 11.5577C1.1484 12.3524 1.14842 13.3629 1.14844 14.6165V14.7171C1.14842 15.9708 1.1484 16.9812 1.25525 17.7759C1.36618 18.601 1.6035 19.2958 2.15526 19.8475C2.70702 20.3993 3.40173 20.6366 4.22683 20.7475C5.02155 20.8544 6.03202 20.8543 7.28564 20.8543H14.7196C15.9732 20.8543 16.9837 20.8544 17.7784 20.7475C18.6035 20.6366 19.2982 20.3993 19.85 19.8475C20.4017 19.2958 20.639 18.601 20.75 17.7759C20.8568 16.9812 20.8568 15.9708 20.8568 14.7171V14.6165C20.8568 13.3629 20.8568 12.3524 20.75 11.5577C20.639 10.7326 20.4017 10.0379 19.85 9.48615C19.2982 8.93439 18.6035 8.69707 17.7784 8.58614C16.9837 8.47929 15.9732 8.47931 14.7196 8.47933H7.28564C6.89741 8.47932 6.53251 8.47932 6.19011 8.48249V7.3335ZM4.41005 9.94888C3.73742 10.0393 3.38123 10.2047 3.12753 10.4584C2.87383 10.7121 2.70842 11.0683 2.61799 11.7409C2.5249 12.4333 2.52344 13.351 2.52344 14.6668C2.52344 15.9826 2.5249 16.9003 2.61799 17.5927C2.70842 18.2653 2.87383 18.6215 3.12753 18.8752C3.38123 19.1289 3.73742 19.2943 4.41005 19.3848C5.10245 19.4779 6.02014 19.4793 7.33594 19.4793H14.6693C15.9851 19.4793 16.9028 19.4779 17.5952 19.3848C18.2678 19.2943 18.624 19.1289 18.8777 18.8752C19.1314 18.6215 19.2968 18.2653 19.3872 17.5927C19.4803 16.9003 19.4818 15.9826 19.4818 14.6668C19.4818 13.351 19.4803 12.4333 19.3872 11.7409C19.2968 11.0683 19.1314 10.7121 18.8777 10.4584C18.624 10.2047 18.2678 10.0393 17.5952 9.94888C16.9028 9.85579 15.9851 9.85433 14.6693 9.85433H7.33594C6.02014 9.85433 5.10245 9.85579 4.41005 9.94888Z"
        fill=""
      />
    </svg>
  );
}

export function GoogleIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <g clipPath="url(#clip0_1715_17244)">
        <path
          d="M19.999 10.2216C20.0111 9.53416 19.9387 8.84776 19.7834 8.17725H10.2031V11.8883H15.8266C15.7201 12.539 15.4804 13.1618 15.1219 13.7194C14.7634 14.2769 14.2935 14.7577 13.7405 15.1327L13.7209 15.257L16.7502 17.5567L16.96 17.5772C18.8873 15.8328 19.9986 13.266 19.9986 10.2216"
          fill="#4285F4"
        />
        <path
          d="M10.2016 19.9998C12.9566 19.9998 15.2695 19.1109 16.959 17.5775L13.739 15.133C12.8774 15.722 11.7209 16.1332 10.2016 16.1332C8.91122 16.1258 7.656 15.7203 6.61401 14.9744C5.57201 14.2285 4.79616 13.1799 4.39653 11.9775L4.27694 11.9875L1.12711 14.3764L1.08594 14.4886C1.93427 16.1455 3.23617 17.5384 4.84606 18.5117C6.45596 19.485 8.31039 20.0002 10.202 19.9998"
          fill="#34A853"
        />
        <path
          d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
          fill="#FBBC05"
        />
        <path
          d="M10.202 3.86687C11.6641 3.84462 13.0783 4.37827 14.1476 5.35583L17.0274 2.60021C15.1804 0.902092 12.7344 -0.0296414 10.202 0.000207357C8.31041 -0.000233694 6.456 0.514977 4.8461 1.48823C3.23621 2.46148 1.93429 3.85441 1.08594 5.51125L4.38555 8.02249C4.78912 6.8203 5.56754 5.77255 6.61107 5.02699C7.6546 4.28143 8.9106 3.87565 10.202 3.86687Z"
          fill="#EB4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_1715_17244">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99881 1.0415C7.81268 1.0415 6.04048 2.81371 6.04048 4.99984C6.04048 7.18596 7.81268 8.95817 9.99881 8.95817C12.1849 8.95817 13.9571 7.18596 13.9571 4.99984C13.9571 2.81371 12.1849 1.0415 9.99881 1.0415ZM7.29048 4.99984C7.29048 3.50407 8.50304 2.2915 9.99881 2.2915C11.4946 2.2915 12.7071 3.50407 12.7071 4.99984C12.7071 6.49561 11.4946 7.70817 9.99881 7.70817C8.50304 7.70817 7.29048 6.49561 7.29048 4.99984Z"
        fill=""
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99881 10.2082C8.07085 10.2082 6.29458 10.6464 4.97835 11.3868C3.68171 12.1161 2.70714 13.2216 2.70714 14.5832L2.70709 14.6681C2.70615 15.6363 2.70496 16.8515 3.77082 17.7195C4.29538 18.1466 5.02921 18.4504 6.02065 18.6511C7.01486 18.8523 8.31066 18.9582 9.99881 18.9582C11.687 18.9582 12.9828 18.8523 13.977 18.6511C14.9684 18.4504 15.7022 18.1466 16.2268 17.7195C17.2927 16.8515 17.2915 15.6363 17.2905 14.6681L17.2905 14.5832C17.2905 13.2216 16.3159 12.1161 15.0193 11.3868C13.703 10.6464 11.9268 10.2082 9.99881 10.2082ZM3.95714 14.5832C3.95714 13.8737 4.47496 13.1041 5.59118 12.4763C6.68781 11.8594 8.24487 11.4582 9.99881 11.4582C11.7527 11.4582 13.3098 11.8594 14.4064 12.4763C15.5227 13.1041 16.0405 13.8737 16.0405 14.5832C16.0405 15.673 16.0069 16.2865 15.4375 16.7502C15.1287 17.0016 14.6125 17.2471 13.729 17.4259C12.8482 17.6042 11.644 17.7082 9.99881 17.7082C8.35362 17.7082 7.14943 17.6042 6.26864 17.4259C5.38508 17.2471 4.86891 17.0016 4.56013 16.7502C3.99074 16.2865 3.95714 15.673 3.95714 14.5832Z"
        fill=""
      />
    </svg>
  );
}

export function CallIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.77789 1.70226C5.79233 0.693575 7.46264 0.873121 8.31207 2.00777L9.36289 3.41144C10.0541 4.33468 9.99306 5.62502 9.17264 6.44079L8.97367 6.63863C8.96498 6.66387 8.9439 6.74322 8.96729 6.89401C9.01998 7.23359 9.30354 7.95393 10.494 9.1376C11.684 10.3209 12.4094 10.6041 12.7538 10.657C12.9099 10.6809 12.9915 10.6586 13.0168 10.6498L13.3568 10.3117C14.0862 9.58651 15.2069 9.45095 16.1099 9.94183L17.702 10.8073C19.0653 11.5484 19.4097 13.4015 18.2928 14.5121L17.109 15.6892C16.736 16.06 16.2344 16.3693 15.6223 16.4264C14.1148 16.5669 10.5996 16.3876 6.90615 12.7151C3.45788 9.28642 2.79616 6.29643 2.71244 4.82323L3.33643 4.78777L2.71244 4.82323C2.67011 4.07831 3.02212 3.44806 3.46989 3.00283L4.77789 1.70226ZM7.31141 2.75689C6.88922 2.19294 6.10232 2.1481 5.65925 2.58866L4.35125 3.88923C4.07632 4.1626 3.94404 4.46388 3.96043 4.75231C4.02695 5.92281 4.56136 8.62088 7.78751 11.8287C11.1721 15.194 14.298 15.2944 15.5062 15.1818C15.7531 15.1587 15.9986 15.0305 16.2276 14.8028L17.4114 13.6257C17.8926 13.1472 17.7865 12.276 17.105 11.9055L15.5129 11.0401C15.0733 10.8011 14.5582 10.8799 14.2382 11.1981L13.8586 11.5755L13.418 11.1323C13.8586 11.5755 13.858 11.5761 13.8574 11.5767L13.8562 11.5779L13.8537 11.5804L13.8483 11.5856L13.8361 11.5969C13.8273 11.6049 13.8173 11.6137 13.806 11.6231C13.7833 11.6418 13.7555 11.663 13.7222 11.6853C13.6555 11.73 13.5674 11.7786 13.4567 11.8199C13.231 11.904 12.9333 11.9491 12.5643 11.8925C11.842 11.7817 10.8851 11.2893 9.61261 10.024C8.34054 8.75915 7.84394 7.80671 7.73207 7.08564C7.67487 6.71693 7.72049 6.41918 7.8056 6.1933C7.84731 6.0826 7.89646 5.99458 7.94157 5.928C7.96407 5.8948 7.98548 5.86704 8.00437 5.84449C8.01382 5.83322 8.02265 5.82323 8.03068 5.81451L8.04212 5.80235L8.04737 5.79697L8.04986 5.79445L8.05107 5.79323C8.05167 5.79264 8.05227 5.79204 8.49295 6.23524L8.05227 5.79204L8.29128 5.55439C8.64845 5.19925 8.69847 4.60971 8.36223 4.16056L7.31141 2.75689Z"
        fill=""
      />
    </svg>
  );
}

export function PencilSquareIcon(props: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
      {...props}
    >
      <g clipPath="url(#clip0_2575_3985)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.95697 0.9375L10.125 0.9375C10.4357 0.9375 10.6875 1.18934 10.6875 1.5C10.6875 1.81066 10.4357 2.0625 10.125 2.0625H9C7.21633 2.0625 5.93517 2.06369 4.96018 2.19478C4.00138 2.32369 3.42334 2.56886 2.9961 2.9961C2.56886 3.42334 2.32369 4.00138 2.19478 4.96018C2.06369 5.93517 2.0625 7.21633 2.0625 9C2.0625 10.7837 2.06369 12.0648 2.19478 13.0398C2.32369 13.9986 2.56886 14.5767 2.9961 15.0039C3.42334 15.4311 4.00138 15.6763 4.96018 15.8052C5.93517 15.9363 7.21633 15.9375 9 15.9375C10.7837 15.9375 12.0648 15.9363 13.0398 15.8052C13.9986 15.6763 14.5767 15.4311 15.0039 15.0039C15.4311 14.5767 15.6763 13.9986 15.8052 13.0398C15.9363 12.0648 15.9375 10.7837 15.9375 9V7.875C15.9375 7.56434 16.1893 7.3125 16.5 7.3125C16.8107 7.3125 17.0625 7.56434 17.0625 7.875V9.04303C17.0625 10.7743 17.0625 12.1311 16.9202 13.1897C16.7745 14.2733 16.4705 15.1283 15.7994 15.7994C15.1283 16.4705 14.2733 16.7745 13.1897 16.9202C12.1311 17.0625 10.7743 17.0625 9.04303 17.0625H8.95697C7.22567 17.0625 5.8689 17.0625 4.81028 16.9202C3.72673 16.7745 2.87171 16.4705 2.2006 15.7994C1.5295 15.1283 1.22549 14.2733 1.07981 13.1897C0.937483 12.1311 0.937491 10.7743 0.9375 9.04303V8.95697C0.937491 7.22567 0.937483 5.86889 1.07981 4.81028C1.22549 3.72673 1.5295 2.87171 2.2006 2.2006C2.87171 1.5295 3.72673 1.22549 4.81028 1.07981C5.86889 0.937483 7.22567 0.937491 8.95697 0.9375ZM12.5779 1.70694C13.6038 0.681022 15.2671 0.681022 16.2931 1.70694C17.319 2.73285 17.319 4.39619 16.2931 5.4221L11.307 10.4082C11.0285 10.6867 10.8541 10.8611 10.6594 11.013C10.4302 11.1918 10.1821 11.3451 9.91961 11.4702C9.69676 11.5764 9.46271 11.6544 9.08909 11.7789L6.9107 12.505C6.50851 12.6391 6.0651 12.5344 5.76533 12.2347C5.46556 11.9349 5.36089 11.4915 5.49495 11.0893L6.22108 8.91092C6.34559 8.53729 6.42359 8.30324 6.5298 8.08039C6.65489 7.81791 6.80821 7.56984 6.98703 7.34056C7.13887 7.1459 7.31333 6.97147 7.59183 6.693L12.5779 1.70694ZM15.4976 2.50243C14.911 1.91586 13.96 1.91586 13.3734 2.50243L13.0909 2.7849C13.108 2.85679 13.1318 2.94245 13.1649 3.038C13.2724 3.34779 13.4758 3.75579 13.86 4.13999C14.2442 4.5242 14.6522 4.7276 14.962 4.83508C15.0575 4.86823 15.1432 4.89205 15.2151 4.90907L15.4976 4.62661C16.0841 4.04003 16.0841 3.08901 15.4976 2.50243ZM14.3289 5.79532C13.9419 5.6289 13.4911 5.36209 13.0645 4.93549C12.6379 4.50889 12.3711 4.05812 12.2047 3.67114L8.41313 7.46269C8.10075 7.77508 7.97823 7.89897 7.87411 8.03246C7.74553 8.19731 7.6353 8.37567 7.54536 8.56439C7.47252 8.71722 7.41651 8.8822 7.2768 9.30131L6.95288 10.2731L7.72693 11.0471L8.69869 10.7232C9.1178 10.5835 9.28278 10.5275 9.43561 10.4546C9.62433 10.3647 9.80269 10.2545 9.96754 10.1259C10.101 10.0218 10.2249 9.89926 10.5373 9.58687L14.3289 5.79532Z"
          fill=""
        />
      </g>
      <defs>
        <clipPath id="clip0_2575_3985">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function UploadIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <g clipPath="url(#clip0_2298_23087)">
        <path
          d="M18.75 13.7501C18.375 13.7501 18.0313 14.0626 18.0313 14.4688V17.2501C18.0313 17.5313 17.8125 17.7501 17.5313 17.7501H2.46875C2.1875 17.7501 1.96875 17.5313 1.96875 17.2501V14.4688C1.96875 14.0626 1.625 13.7501 1.25 13.7501C0.875 13.7501 0.53125 14.0626 0.53125 14.4688V17.2501C0.53125 18.3126 1.375 19.1563 2.4375 19.1563H17.5313C18.5938 19.1563 19.4375 18.3126 19.4375 17.2501V14.4688C19.4688 14.0626 19.125 13.7501 18.75 13.7501Z"
          fill=""
        />
        <path
          d="M5.96875 6.46881L9.3125 3.21881V14.0313C9.3125 14.4063 9.625 14.7501 10.0312 14.7501C10.4062 14.7501 10.75 14.4376 10.75 14.0313V3.21881L14.0937 6.46881C14.2187 6.59381 14.4063 6.65631 14.5938 6.65631C14.7813 6.65631 14.9688 6.59381 15.0938 6.43756C15.375 6.15631 15.3438 5.71881 15.0938 5.43756L10.5 1.06256C10.2187 0.812561 9.78125 0.812561 9.53125 1.06256L4.96875 5.46881C4.6875 5.75006 4.6875 6.18756 4.96875 6.46881C5.25 6.71881 5.6875 6.75006 5.96875 6.46881Z"
          fill=""
        />
      </g>
      <defs>
        <clipPath id="clip0_2298_23087">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}