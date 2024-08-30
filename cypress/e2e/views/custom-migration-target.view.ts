export const sourcesToggle = "#sources-toggle";
export const sourcesList = "ul#formSources-id.pf-v5-c-select__menu";
export enum CustomMigrationTargetView {
    createSubmitButton = "button[id='identity-form-submit']:contains('Create')",
    editSubmitButton = "button[id='identity-form-submit']:contains('Save')",
    actionsButton = "button[aria-label='Table toolbar actions kebab toggle']",
    nameInput = "#name",
    helperText = "span[class*='helper-text']",
    descriptionInput = "#description",
    imageInput = "#custom-migration-target-upload-image-filename",
    imageHelper = "#custom-migration-target-upload-image-helper",
    ruleInput = "input[accept*='.xml']",
    ruleHelper = "h4[class*='alert__title']",
    ruleFilesToggle = "button[aria-expanded='true']",
    takeMeThereNotification = "Take me there",
    repositoryTypeDropdown = "#repo-type-select-toggle",
    repositoryUrl = "#sourceRepository",
    branch = "#branch",
    rootPath = "#rootPath",
    credentialsDropdown = "#associated-credentials-select-toggle",
    credentialsInput = "#associated-credentials-select-toggle-select-typeahead",
    retrieveFromARepositoryRadio = "#repository",
    dragButton = "#drag-button",
    card = ".pf-v5-c-card",
    cardContainer = "div.dnd-grid",
    languageDropdown = "#action-select-toggle",
    dragAndDropSection = ".dnd-grid",
}
