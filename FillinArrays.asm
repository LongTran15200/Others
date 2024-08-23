;Filling an Array
;Long Tran
;Computer Organization
;COSC 2325-2801
;November 10, 2022
;Create a procedure that fills an array of doublewords with N random integers, making sure the values fall within the range j...k, inclusive. 
;When calling the procedure, pass a pointer to the array that will hold the data, pass N, and pass the values of j and k. 
;Preserve all register values between calls to the procedure. Write a test program that calls the procedure twice, using different values for j and k. 
;Verify your results using a debugger. 



INCLUDE Irvine32.inc
.data
str1 byte "random number range from -5 to 5",0
str2 byte "random number range from -50 to 50",0

N=5                     ;create length of array 0-4
array DWORD N DUP(?)
j DWORD ?
k DWORD ?
.code
main PROC
    mov edx,OFFSET str1
    call WriteString
    call Randomize      ;call Randomize from Ivrine32.inc
    mov j, -5           ;set lower limit(j)    ;range from -5 to 5
    mov k, 5            ;set upper limit(k)
    mov ESI, OFFSET array
    mov ECX, N          ;set array length[5]
    call fillWithRandom

    ;create array twice
    mov edx,OFFSET str2
    call WriteString
    mov j, -50          ;set lower limit(j)    ;range from -50 to 50
    mov k, 50           ;set upper limit(k)
    mov ESI, OFFSET array
    mov ECX, N          ;;set array length[5]
    call fillWithRandom ;Call your function "fillWithRandom"
    call WaitMsg
    exit
main ENDP

fillWithRandom PROC
    push esi            ;start push esi, ecx
    push ecx

l1:                     ;start loop 1
    mov eax, j
    mov ebx, k

    DEC ebx             ;start decrease from ebx
    sub ebx, eax        ;create range from 0 to N
    xchg ebx, eax       ;random works with eax
    call RandomRange    ;call RandomRange
    neg ebx             ;change ebx
    sub eax, ebx        ;sub ebx from eax 
    call Crlf
    call WriteInt

    mov [esi], eax
    add esi, 4          ;move 4 into esi
loop l1                 ;loop back to L1
    pop esi             ;start pop esi, ecx
    pop ecx
    ret                 ;return loop
fillWithRandom ENDP

END main
