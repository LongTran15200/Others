;Color Matrix
;Long Tran
;Computer Organization	
;COSC 2325-2801
;October 11, 2022	
;Write a program that displays a single character in all possible combinations of foreground and background colors (16 X 16 = 256).
;The colors are numbered from 0 - 15, so you can use a nested loop to generate all possible combinations.
;Generate the character at least 6 times.



INCLUDE Irvine32.inc

.data
str1 byte "color ",0 ;display word "color"
count DWORD ?

.code
main proc

mov eax, black + (white * 16) ;black on white background
mov ecx, 16 ;loop counter
L1: ;outer loop
mov count, ecx
push eax
mov ecx, 16 ;loop 16x16
L2: ;inner loop
call SetTextColor
push eax ;push registers
mov edx,OFFSET str1
call WriteString
pop eax ;restore registers
inc eax
loop L2
call crlf
pop eax
add eax, 16 ;setting colors 
mov ecx, count
loop L1
call crlf
call WaitMsg

exit
main ENDP
END main
