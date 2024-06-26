import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileInfo/ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"Zhanybek"} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Zhanybek");
    });

    test("after creation <span/> should be displayed with correct status", () => {
        const component = create(<ProfileStatus status={"Zhanybek"} />);
        const root = component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull();
    });

    test("after creation <input/> should`nt be displayed", () => {
        const component = create(<ProfileStatus status={"Helloaa"} />);
        const root = component.root

        expect(() => {
            let input = root.findByType("input")
        }).toThrow()
    });

    test("after creation <span/> should be displayed with correct status", () => {
        const component = create(<ProfileStatus status={"Zhanybek"} />);
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe("Zhanybek")
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status={"Zhanybek"} />);
        const root = component.root
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")

        expect(input.props.value).toBe("Zhanybek")
    });

    test("callback should be called", () => {
        const mockCallBack = jest.fn()
        const component = create(<ProfileStatus status={"Zhanybek"} updateStatus={mockCallBack} />);
        const instance = component.getInstance()
        instance.deactivateEditMode()

        expect(mockCallBack.mock.calls.length).toBe(1)
    });
});
