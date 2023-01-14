export {}

/*
export function helper_cmd_attachTabsToggleEventsById(
  ao_data: Array<{
    id: string, 
    tab_id: string
  }>,
): void {
  ao_data.forEach(ao => {
    const id = ao.id
    const s_name = ao.tab_id
    const btn = document.getElementById(id) as HTMLButtonElement
    btn.addEventListener("click", (evt) => {
      changeOpenedHTMLTab(evt, s_name)
    })
  })
}

function changeOpenedHTMLTab(evt, tabName: string): void {

  // Get all elements with class="tabcontent" and hide them
  const tabcontent = document.getElementsByClassName("tabcontent")
  for (let i = 0; i < tabcontent.length; i++) {
    //@ts-ignore
    tabcontent[i].style.display = "none"
  }

  // Get all elements with class="tablinks" and remove the class "active"
  const tablinks = document.getElementsByClassName("tablinks")
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "")
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  //@ts-ignore
  document.getElementById(tabName).style.display = "block"
  evt.currentTarget.className += " active"
}

export function helper_cmd_setSelectedHTMLTabById(id: string): void {
  (document.getElementById(id) as HTMLButtonElement).click()
}

// helper_cmd_attachTabsToggleEventsById
// helper_cmd_setSelectedHTMLTabById
*/