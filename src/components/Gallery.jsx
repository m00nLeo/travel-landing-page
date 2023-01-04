
const Gallery = () => {
  return (
    <div className="my-20 mx-auto max-w-screen-xl">
      <div className="mb-10">
        <h1 className="font-serif text-[#172432] mb-6 text-5xl font-extralight">
          Destination Gallery
        </h1>
        <hr className="mb-9 w-[288px] border-[2px] h-1 border-[#FF7757] border-solid  "></hr>
        <div className="md:flex md:justify-between">
          <p className="text-lg font-normal leading-[21px] text-[#767E86] tracking-wide">
            Our photo gallery on trip
          </p>

          <div className="text-white gap-[40px] md:cursor-pointer hidden md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 bg-gray-800 rounded-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" bg-orange-500 w-8 h-8 rounded-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:flex gap-2 py-2 ">
        <img
          className="w-full h-[400px] object-cover rounded-2xl my-8 hover:my-2"
          src="https://s3-alpha-sig.figma.com/img/edb3/e691/ca3c20163cc6d6a165df950e857fb993?Expires=1673827200&Signature=l-yqlWHcwpVlV6RU-ExWaHAHPDs1uOSghkKAqUks3mTlj5qumwTgYcYSa3WG6u8M0qK711oPDQnDyJTcdbM48S6Ymy-qomKOU8Ea9v1pyytFFaxqXJ465rrqxmIXCGfYikxwWyhw9WLKIWeSED7GmcFEd41bLUbQv-mEyRaQm-bDj7samFqkpxbxvkkGDmPg~IaTKu86zitfroFCtZT6RoVKkRqwMKYBiQsdEBcP--kBvZjN7TGGpnhPut6KAlJUrBDoHOxMn9sY-4HoicajtAtS~ef9jHMAt2ISWhp6Rx6yWAZY-f8hw3c6Rxl3YA2NrEd5L74s4y8sUKext9GQAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <img
          className="w-full h-[400px] object-cover rounded-2xl my-8 hover:my-2"
          src="https://s3-alpha-sig.figma.com/img/3169/3dd6/8a5d0f488a165c9b801d4a008d9dbcf8?Expires=1673827200&Signature=YKrUrHes5JoupnrSWjVMEIWO7pPstzFFLYkv39XwKo8mz03C6hAmW4AU4eaDGxf9Ay~JxwQITdx6inqCJgd4OPzc8GQxkNZgFmwDkDpbohpJLVA-E5lbf7oOMOeXLtDV86hk2jkDQw-CEnKMkBqKIs-pVWRUAfICirqko6mS8lFiqbkOEk~VrmhYsEN-FfAU~Ll4mpEY3-oqngWRvyDBWxw8-aVNWt9RC6NLnZkID8hfdHxWKBa~dv6UE3QMh85W~-A7WCdPsg1gkUsn1D3e-1fMTr1SV-GxPNNA5S2FfHh5XwZhZxzbE2-aMyKz1dmb3dpK8FegFwS8ZKdcvr8vOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <img
          className="w-full h-[400px] object-cover rounded-2xl my-8 hover:my-2"
          src="https://s3-alpha-sig.figma.com/img/9809/97d0/9ae80156ff64bb4e6cf358b5c306c77f?Expires=1673827200&Signature=dy6Qhs84~r~RKsCjY25ofIjxgCOrdciakoRP9-w81Xd5yxPAhb92SqWbCORVT7SIGpPWMJ-I4~rxAuU0AGwEjh3sd8pcYnB~KCd~XyTma~ho8lOaD74HZ2NRGm50W-5aUwbSrC74NqacAYRF69Ua~ntjdLtE1jUY6v2lXoM4eURdxcxn8cSBtqhvuorJbB9H-E6J6AGNWAuH6JOPMZxgZZEv6IbcnuKTra4uDtTNOz0bXiESiU6VsdmbxZa-Lagc0h~1UmiU2TynjDNr3LcUdSTOIaC0PJPAPcpTGTllkWUnX9NZGhJk-Rcd3SojBiA7cMxQMzXymGenkC-oikJbEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <img
          className="w-full h-[400px] object-cover rounded-2xl my-8 hover:my-2"
          src="https://s3-alpha-sig.figma.com/img/b795/bbd1/247b14266e37a88bb025d65103b93ab0?Expires=1673827200&Signature=qJwAXaRhFqrb2mH78KsENBEOZvg3OPaup0LBlIvSrl~pp7eSPHxDT560xGFuwlZQggAPea6-wfHMsXld9hKCaQwLwI~rgAOzcF9EutKliqLRE58lTpbJp47-XizvMC1Wt2bWFFagq0orRF81tuhMlyXeRYC2Nm~dllqM1fOYPcLuPf6Hk87DKQcdyCjYXSUaHZMEVQTW1Xgjog~G00RP9aq8aF9QcWbDLoBkRQYZJnJuDrhbFK0RvVY4wp-o8yUFyrKbG0DzCdjQxkCexHnPJY0RZfBSG2T~kVkzNSW0gGVjTrnqDJenVVcmKV5PP1vpGHIFalDZoq8c9qkCQcAagg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>
      <div className="flex text-white m-4 gap-8 justify-center mt-20 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-20 h-16 bg-gray-800 rounded-xl"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" bg-orange-500 w-20 h-16 rounded-xl"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Gallery;
