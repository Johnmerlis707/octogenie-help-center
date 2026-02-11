import { GuideSection } from "@/lib/types";

export const createTaskGuide: GuideSection = {
    id: "create-task",
    title: "Creating a New Task",
    subtitle: "Organize your daily legal work",
    description: "Create and assign tasks related to cases, matters, or clients. The Tasks module helps you track responsibilities, set priorities, and meet critical deadlines across your team.",
    estimatedTime: "5 min",
    totalSteps: 5,
    steps: [
        {
            number: 1,
            title: "Navigate to Tasks",
            description: "Log in to your OctoGenie account and click on Tasks from the left-hand menu. This opens the Task Management page.",
            image: "/assets/tasks/Tasks%20-%20Option%20in%20the%20left%20menu.png",
            imageAlt: "Tasks navigation",
        },
        {
            number: 2,
            title: "Click on Add New Task",
            description: "On the top-right corner of the Task Management screen, click the '+ Add New Task' button to open the creation form.",
            image: "/assets/tasks/Tasks%20-%20Add%20New%20Task.png",
            imageAlt: "Add New Task button",
        },
        {
            number: 3,
            title: "Enter Task Details",
            description: "Provide clear details: Task Title (e.g., Prepare hearing brief), Category (Case Analysis, Client Meeting, Court Filing), and Priority (Low, Medium, High).",
            image: "/assets/tasks/Tasks%20-%20Details%20Updation%20screen.png",
            imageAlt: "Task detail fields",
        },
        {
            number: 4,
            title: "Assign and Link",
            description: "Select the team member responsible in the 'Assign To' field. Optionally link the task to a specific Case or Client.",
            image: "/assets/tasks/Task%20-Assign%20task%20field.png",
            imageAlt: "Assignment and linking",
        },
        {
            number: 5,
            title: "Save the Task",
            description: "Review all entered details and click on 'Create Task'. The task will be successfully added to your records.",
            imageAlt: "Create task button",
            expectedOutcome: "The task is created and appears in your Tasks list for tracking. You can view it under 'Assigned to Me' or 'Team Tasks'.",
            isLast: true,
        },
    ],
};

export const assignTaskGuide: GuideSection = {
    id: "assign-task",
    title: "Assigning Tasks to Team Members",
    subtitle: "Effective tracking and accountability",
    description: "Delegate case-related tasks to specific team members to ensure clear ownership. Team members must be added to your organization before they can be assigned work.",
    estimatedTime: "2 min",
    totalSteps: 3,
    steps: [
        {
            number: 1,
            title: "Open Task Form",
            description: "Start a new task or open an existing one. Locate the 'Assign Task' field in the form.",
            image: "/assets/tasks/Tasks%20-%20Details%20Updation%20screen.png",
            imageAlt: "Assign field location",
        },
        {
            number: 2,
            title: "Select Team Member",
            description: "Click the dropdown and select the team member's name from the list. Note that team members must already be added to your organization.",
            image: "/assets/tasks/Task%20-Assign%20task%20field.png",
            imageAlt: "Team member selection",
        },
        {
            number: 3,
            title: "Complete Assignment",
            description: "Review all details and click 'Create Task' or 'Update'. The task is now assigned to the selected member.",
            imageAlt: "Save assignment",
            expectedOutcome: "Clear accountability is established for legal work across the team.",
            isLast: true,
        },
    ],
};

export const setDueDateGuide: GuideSection = {
    id: "set-due-date",
    title: "Setting and Updating Due Dates",
    subtitle: "Prioritize work and meet deadlines",
    description: "Define task deadlines so team members can prioritize and complete work on time.",
    estimatedTime: "2 min",
    totalSteps: 4,
    steps: [
        {
            number: 1,
            title: "Locate Due Date Field",
            description: "In the 'Create Task' or 'Edit Task' form, click on the calendar icon within the 'Due Date' field.",
            image: "/assets/tasks/Tasks%20-%20Details%20Updation%20screen.png",
            imageAlt: "Due date field icon",
        },
        {
            number: 2,
            title: "Select Deadline",
            description: "Pick the required date from the calendar that appears.",
            imageAlt: "Calendar picker",
        },
        {
            number: 3,
            title: "Save Task",
            description: "Review all details and click 'Create Task' or 'Update / Save'.",
            imageAlt: "Saving task with due date",
        },
        {
            number: 4,
            title: "Verify View",
            description: "The newly created task will appear in the Tasks list. You can view it under categories like 'Assigned to Me' or 'Team Tasks'.",
            imageAlt: "Tasks list view",
            expectedOutcome: "Deadlines are clearly defined, improving firm-wide productivity and management.",
            isLast: true,
        },
    ],
};
