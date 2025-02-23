import { NodeInputProps } from "./helpers"

const TextInput = () => {
  return (
    <form>
      <label>
        <input type="text"/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export function NodeInputDefault(props: NodeInputProps) {
  const { node, attributes, value = "", setValue, disabled } = props

  // Some attributes have dynamic JavaScript - this is for example required for WebAuthn.
  const onClick = () => {
    // This section is only used for WebAuthn. The script is loaded via a <script> node
    // and the functions are available on the global window level. Unfortunately, there
    // is currently no better way than executing eval / function here at this moment.
    if (attributes.onclick) {
      const run = (() => attributes.onclick)
      run()
    }
  }

  // Render a generic text input field.
  return (
    <TextInput
      // title={node.meta.label?.text}
      // onClick={onClick}
      // onChange={(e) => {
      //   setValue(e.target.value)
      // }}
      // type={attributes.type}
      // name={attributes.name}
      // value={value}
      // disabled={attributes.disabled || disabled}
      // help={node.messages.length > 0}
      // state={
      //   node.messages.find(({ type }) => type === "error") ? "error" : undefined
      // }
      // subtitle={
      //   <>
      //     {node.messages.map(({ text, id }, k) => (
      //       <span key={`${id}-${k}`} data-testid={`ui/message/${id}`}>
      //         {text}
      //       </span>
      //     ))}
      //   </>
      // }
    />
  )
}
