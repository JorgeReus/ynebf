import { component$ } from "@builder.io/qwik";

import { IPv4, IPv4CidrRange, Validator } from "ip-num";

export default component$(() => {
  const address = "10.0.0.0/8";
  const address2 = "10.0.0.0/16";

  // let a = Validator.isValidIPv4CidrRange(address)
  //
  // console.log(a)

  let a1 = IPv4CidrRange.fromCidr(address)
  let a2 = IPv4CidrRange.fromCidr(address2)

  let res = a1.contains(a2)

  console.log(res)



  return (
    <>
      <span>{`CIDR contains ${res}`}</span>
    </>
  );
});
