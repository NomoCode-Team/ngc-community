type t_configProjectValues = {
  description: any,
  name: any,
  title: any,
  type: any,
  value: any,
}

type t_state = {
  a_NGCProjectNames: [],
  s_selectedProject: string | null,
  ao_refHTMLConfigProjectValues: Array<t_configProjectValues>,
  selectedCardProjectElem: HTMLDivElement | null
}

export let STATE: t_state = {
  a_NGCProjectNames: [],
  s_selectedProject: null,
  ao_refHTMLConfigProjectValues: [],
  selectedCardProjectElem: null
}