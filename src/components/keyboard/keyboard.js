import React from 'react';

import './keyboard.scss';

// Source: http://cssdeck.com/labs/apple-keyboard-via-css3

const keyboard = () => (
    <div id="keyboard">
        <ul class="cf" id="numbers">
            <li><a href="#" class="key c192"><b>~</b><span>`</span></a></li>
            <li><a href="#" class="key c49"><b>!</b><span>1</span></a></li>
            <li><a href="#" class="key c50"><b>@</b><span>2</span></a></li>
            <li><a href="#" class="key c51"><b>#</b><span>3</span></a></li>
            <li><a href="#" class="key c52"><b>$</b><span>4</span></a></li>
            <li><a href="#" class="key c53"><b>%</b><span>5</span></a></li>
            <li><a href="#" class="key c54"><b>^</b><span>6</span></a></li>
            <li><a href="#" class="key c55"><b>&amp;</b><span>7</span></a></li>
            <li><a href="#" class="key c56"><b>*</b><span>8</span></a></li>
            <li><a href="#" class="key c57"><b>(</b><span>9</span></a></li>
            <li><a href="#" class="key c48"><b>)</b><span>0</span></a></li>
            <li><a href="#" class="key c189 alt"><b>_</b><span>-</span></a></li>
            <li><a href="#" class="key c187"><b>+</b><span>=</span></a></li>
            <li><a href="#" class="key c46" id="delete"><span>Delete</span></a></li>
        </ul>
        <ul class="cf" id="qwerty">
            <li><a href="#" class="key c9" id="tab"><span>tab</span></a></li>
            <li><a href="#" class="key c81"><span>q</span></a></li>
            <li><a href="#" class="key c87"><span>w</span></a></li>
            <li><a href="#" class="key c69"><span>e</span></a></li>
            <li><a href="#" class="key c82"><span>r</span></a></li>
            <li><a href="#" class="key c84"><span>t</span></a></li>
            <li><a href="#" class="key c89"><span>y</span></a></li>
            <li><a href="#" class="key c85"><span>u</span></a></li>
            <li><a href="#" class="key c73"><span>i</span></a></li>
            <li><a href="#" class="key c79"><span>o</span></a></li>
            <li><a href="#" class="key c80"><span>p</span></a></li>
            <li><a href="#" class="key c219 alt"><b>{ '\{' }</b><span>[</span></a></li>
            <li><a href="#" class="key c221 alt"><b>{ '\}' }</b><span>]</span></a></li>
            <li><a href="#" class="key c220 alt"><b>|</b><span>\</span></a></li>
        </ul>
        <ul class="cf" id="asdfg">
            <li><a href="#" class="key c20 alt" id="caps"><b></b><span>caps lock</span></a></li>
            <li><a href="#" class="key c65"><span>a</span></a></li>
            <li><a href="#" class="key c83"><span>s</span></a></li>
            <li><a href="#" class="key c68"><span>d</span></a></li>
            <li><a href="#" class="key c70"><span>f</span></a></li>
            <li><a href="#" class="key c71"><span>g</span></a></li>
            <li><a href="#" class="key c72"><span>h</span></a></li>
            <li><a href="#" class="key c74"><span>j</span></a></li>
            <li><a href="#" class="key c75"><span>k</span></a></li>
            <li><a href="#" class="key c76"><span>l</span></a></li>
            <li><a href="#" class="key c186 alt"><b>:</b><span>;</span></a></li>
            <li><a href="#" class="key c222 alt"><b>"</b><span>'</span></a></li>
            <li><a href="#" class="key c13 alt" id="enter"><span>return</span></a></li>
        </ul>
        <ul class="cf" id="zxcvb">
            <li><a href="#" class="key c16 shiftleft"><span>Shift</span></a></li>
            <li><a href="#" class="key c90"><span>z</span></a></li>
            <li><a href="#" class="key c88"><span>x</span></a></li>
            <li><a href="#" class="key c67"><span>c</span></a></li>
            <li><a href="#" class="key c86"><span>v</span></a></li>
            <li><a href="#" class="key c66"><span>b</span></a></li>
            <li><a href="#" class="key c78"><span>n</span></a></li>
            <li><a href="#" class="key c77"><span>m</span></a></li>
            <li><a href="#" class="key c188 alt"><b>&lt;</b><span>,</span></a></li>
            <li><a href="#" class="key c190 alt"><b>&gt;</b><span>.</span></a></li>
            <li><a href="#" class="key c191 alt"><b>?</b><span>/</span></a></li>
            <li><a href="#" class="key c16 shiftright"><span>Shift</span></a></li>
        </ul>
        <ul class="cf" id="bottomrow">
            <li><a href="#" class="key" id="fn"><span>fn</span></a></li>
            <li><a href="#" class="key c17" id="control"><span>control</span></a></li>
            <li><a href="#" class="key option" id="optionleft"><span>option</span></a></li>
            <li><a href="#" class="key command" id="commandleft"><span>command</span></a></li>
            <li><a href="#" class="key c32" id="spacebar"></a></li>
            <li><a href="#" class="key command" id="commandright"><span>command</span></a></li>
            <li><a href="#" class="key option" id="optionright"><span>option</span></a></li>
            <ol class="cf">
                <li><a href="#" class="key c37" id="left"><span></span></a></li>
                <li>
                    <a href="#" class="key c38" id="up"><span></span></a>
                    <a href="#" class="key c40" id="down"><span></span></a>
                </li>
                <li><a href="#" class="key c39" id="right"><span></span></a></li>
            </ol>
        </ul>
    </div>
);
export default keyboard;