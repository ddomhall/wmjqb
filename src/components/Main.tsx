import { useState } from "react";

if (typeof document !== "undefined") {
  document.addEventListener("keyup", (e) =>
    document.getElementById(e.key)?.click()
  );
}

export default function Main() {
  const [value, setValue] = useState<Array<string>>([]);
  const [signedIn, setSignedIn] = useState<boolean>();

  function addSaved(post: string) {
    setValue(value.concat(post));
  }

  const posts = [
    ['li[role="presentation"]'],
    ['[data-automation-id="promptOption"]'],
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-dark">
      <h1 className=" p-4 text-2xl font-bold">WalkMe jQuery Builder</h1>
      <section className=" flex h-auto w-full justify-center space-x-4 px-4 ">
        {/* input & buttons */}
        <button
          id="["
          onClick={() => {
            navigator.clipboard
              .writeText(`wmjQuery('${value.join("")}')`)
              .catch(onrejectionhandled);
          }}
        >
          [<br />
          test
        </button>
        <button
          id={"Enter"}
          className="aspect-square w-12"
          onClick={() => {
            null;
          }}
        >
          enter
          <br />
          save
        </button>
        <input
          className="h-12 w-full rounded-full px-4 text-dark"
          type="text"
          value={`${value.join(``)}|`}
          readOnly
        />
        <button
          id={"Backspace"}
          className="aspect-square w-12"
          onClick={() => setValue(value.slice(0, -1))}
        >
          del
          <br />x
        </button>
        <button
          id="]"
          onClick={() => {
            navigator.clipboard
              .writeText(value.join(""))
              .catch(onrejectionhandled);
          }}
        >
          ]<br />
          copy
        </button>
      </section>
      <section className="flex flex-wrap justify-center">
        {/* main buttons */}
        <button
          id={"`"}
          onClick={() => {
            const v: string = prompt("enter element");
            if (v) setValue(value.concat(v));
          }}
        >
          `<br />
          element
        </button>
        <button
          id={"1"}
          onClick={() => {
            const v: string = prompt("enter class name");
            if (v) setValue(value.concat(`.${v}`));
          }}
        >
          1<br />
          class
        </button>
        <button
          id={"2"}
          onClick={() => {
            const v: string = prompt("enter id name");
            if (v) setValue(value.concat(`#${v}`));
          }}
        >
          2<br />
          id
        </button>
        <button
          id={"3"}
          onClick={() => {
            const v: string = prompt("enter attribute");
            if (v) setValue(value.concat(`[${v}]`));
          }}
        >
          3<br />
          attribute
        </button>
        <button
          id={"4"}
          onClick={() => {
            const v: string = prompt("enter text");
            if (v) setValue(value.concat(`:contains(${v})`));
          }}
        >
          4<br />
          contains
        </button>
        <button
          id={"5"}
          onClick={() => {
            const v: string = prompt("enter number");
            if (v) setValue(value.concat(`:eq(${v})`));
          }}
        >
          5<br />
          count
        </button>
        <button
          id={"6"}
          onClick={() => {
            const v: string = prompt("enter selector");
            if (v) setValue(value.concat(`:has(${v})`));
          }}
        >
          6<br />
          has
        </button>
        <button
          id={"7"}
          onClick={() => {
            if (value[value.length - 1] !== ":checked")
              setValue(value.concat(":checked"));
          }}
        >
          7<br />
          checked
        </button>
        <button
          id={"8"}
          onClick={() => {
            if (value[value.length - 1] !== ":visible")
              setValue(value.concat(":visible"));
          }}
        >
          8<br />
          visible
        </button>
        <button
          id={"9"}
          onClick={() => {
            if (
              value[value.length - 1] !== ":first" &&
              value[value.length - 1] !== ":last"
            )
              setValue(value.concat(":first"));
          }}
        >
          9<br />
          first
        </button>
        <button
          id={"0"}
          onClick={() => {
            if (
              value[value.length - 1] !== ":last" &&
              value[value.length - 1] !== ":first"
            )
              setValue(value.concat(":last"));
          }}
        >
          0<br />
          last
        </button>
        <button
          id={"-"}
          onClick={() => {
            if (
              value[value.length - 1] !== "+" &&
              value[value.length - 1] !== " "
            )
              setValue(value.concat("+"));
          }}
        >
          -<br />
          sibling
        </button>
        <button
          id={"="}
          onClick={() => {
            if (
              value[value.length - 1] !== " " &&
              value[value.length - 1] !== "+"
            )
              setValue(value.concat(" "));
          }}
        >
          =<br />
          child
        </button>
      </section>
      <section className="mb-auto flex w-full flex-col items-center justify-center">
        {/* saved */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!signedIn) setSignedIn(true);
            else setSignedIn(false);
          }}
        >
          <label htmlFor="account">{signedIn ? "yes" : "not signed in"}</label>
          <input
            id="account"
            type="text"
            className="mx-4 mb-4 rounded-full p-2 text-dark"
          />
        </form>
        {posts.map((p, i) => (
          <button
            key={i}
            className="w-max"
            onClick={(e) => addSaved((e.target as HTMLElement).textContent)}
          >
            {p}
          </button>
        ))}
      </section>
      <footer className="pb-4">ddomhall</footer>
    </main>
  );
}
