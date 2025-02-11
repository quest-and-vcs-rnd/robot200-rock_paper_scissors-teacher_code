function setup_Staff_ThisLessonOnly_Func () {
	
}
function setup_System_AnyLessonAlways_Func () {
    quest_Dashboard.quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func(
    0,
    quest_Toggle_OnOff_Enum.On,
    quest_Debug_Show_Enum.Dashboard_OLED
    )
}
function setup_Student_ThisLessonOnly_Func () {
	
}
function pre_setup_System_AnyLessonAlways_Func () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "Fix 'show leds' Block's Orientation for Driving"
    )
    display.rotateTo(display.Direction.UpsideDown)
}
pre_setup_System_AnyLessonAlways_Func()
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"2-Sequence Animation Validates New-Start"
)
basic.showIcon(IconNames.Heart)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
basic.showIcon(IconNames.Happy)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
setup_Staff_ThisLessonOnly_Func()
setup_System_AnyLessonAlways_Func()
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"©️ 2025 Quest Institute. All rights reserved."
)
quest_Note_2.quest_Show_String_For_Note_Big_Func(
"Student Setup-Code Can Start Below.."
)
basic.forever(function () {
	
})
